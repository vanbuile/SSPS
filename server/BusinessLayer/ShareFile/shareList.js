const ShareFileDAO = require("../../PersistenceLayer/ShareFileDAO");

const viewListSharedFile = async (req, res) => {
  try {
    let sharedFiles;
    if (req.query.search) {
      const searchKey = req.query.search;
      sharedFiles = await ShareFileDAO.searchByKey(searchKey);
    } else {
      sharedFiles = await ShareFileDAO.getListSharedFile();
    }

    console.log(sharedFiles);
    return res.status(200).json({ data: sharedFiles });
  } catch (error) {
    console.error('Error retrieving shared files:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const viewDetail = async (req, res) => {
  try {
    console.log("in viewdetail")
    const fileId = req.params.id;

    const fileDetails = await ShareFileDAO.getDetailbyID(fileId);
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

module.exports = { viewListSharedFile, viewDetail,addComment };
