const ShareFileDAO = require("../../PersistenceLayer/ShareFileDAO");

const viewListSharedFile = async (req, res) => {
  try {
    let sharedFiles;
    const searchKey = req.query.search;
    const sortBy = req.query.sort;
    const mssv = req.query.mssv; 
    if (searchKey && sortBy) {
      const searchResult = await ShareFileDAO.searchByKey(searchKey);
      const sortReasult = await ShareFileDAO.sortBy(sortBy, mssv);
      sharedFiles = sortResult.filter(file => searchResult.some(searchedFile => searchedFile.id === file.id));
    } else if (searchKey) {
      sharedFiles = await ShareFileDAO.searchByKey(searchKey);
    } else if (sortBy) {
      sharedFiles = await ShareFileDAO.sortBy(sortBy, mssv);
    } else {
      sharedFiles = await ShareFileDAO.getListSharedFile();
    }

    //console.log(sharedFiles);
    return res.status(200).json({ data: sharedFiles });
  } catch (error) {
    console.error('Error retrieving shared files:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const viewDetail = async (req, res) => {
  try {
    //console.log("in viewdetail")
    const fileId = req.params.id;

    const fileDetails = await ShareFileDAO.getDetailbyID(fileId);
    if (!fileDetails) return res.status(404).json({errorMes: 'not found'});
    const commentLists = await ShareFileDAO.getCommentList(fileId);
    // console.log(fileDetails);
    // console.log(commentLists);


    return res.status(200).json({ fileDetails:fileDetails, commentList:commentLists });
  } catch (error) {
    console.error('Error retrieving file details:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
const addComment = async (req, res) => {
  try {
      const fileId = req.params.id;
      const mssv= req.body.mssv;
      const content=req.body.content;
      const date = new Date(); 

      await ShareFileDAO.insertComment(fileId, mssv, content, date);

      return res.status(200).json({ message: 'Comment added successfully' });
  } catch (error) {
      console.error('Error adding comment:', error);
      return res.status(500).json({ error: 'Internal server error' });
  }
};
const addRating = async (req, res) => {
  try {
    const fileId = req.params.id;
    const mssv = req.body.mssv;
    const star = req.body.star;
    const date = new Date();

    const hasRated = await ShareFileDAO.checkRated(fileId, mssv);

    if (hasRated) {
      await ShareFileDAO.updateRating(fileId, mssv, star, date);
      return res.status(200).json({ message: 'Rating updated successfully' });
    } else {
      await ShareFileDAO.insertRating(fileId, mssv, star, date);
      return res.status(200).json({ message: 'Rating added successfully' });
    }
  } catch (error) {
    console.error('Error Rating:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const deletePost = async(req,res) =>
{
  try {
    const fileId = req.params.id;
    await ShareFileDAO.deleteFile(fileId);
    return res.status(200).json({ message: 'Delete successfully' });
} catch (error) {
    console.error('Error Deleting:', error);
    return res.status(500).json({ error: 'Internal server error' });
}
}
const viewStar = async(req,res) => 
{
  try 
  {
    const fileId = req.params.id;
    const mssv = req.query.mssv;
    const star = await ShareFileDAO.getStar(fileId,mssv);
    return res.status(200).json({ star: star});

  }
  catch (error) {
    console.error('Error Get:', error);
    return res.status(500).json({ error: 'Internal server error' });
}
}
module.exports = { viewListSharedFile, viewDetail,addComment,addRating,deletePost,viewStar};
