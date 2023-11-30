import React, { useState,useEffect } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { FaPrint, FaTrash } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import { FaStar, FaBackward, FaEye } from 'react-icons/fa';
import axios from "axios";
import APIs from "../../util/API.js";
export default function Detail() {
  const { id } = useParams();
  const [rated, setRated] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [fileDetails, setFileDetails] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await axios.get(`${APIs.APIshareFile}/detail/${id}`);
      //console.log(response);
      //console.log('Not found, redirecting...');
      
        const data = response.data;
        console.log('Data from server:', data.commentList);
        setFileDetails(data.fileDetails);
        setCommentList(data.commentList);
        setIsLoaded(true);
      
    } catch (error) {
      console.error('Error fetching data:', error);
      navigate('/shared');
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Hiển thị loading khi fetchData đang thực hiện
  }

  const handleSendComment = async () => {
    if(newComment)
    {
    try {
      const response = await axios.post(`${APIs.APIshareFile}/detail/${id}/comment`, {
        content: newComment,
        mssv:'1818972',
      });
      if (response){
        fetchData()
      }
      console.log('Comment sent:', response.data)
      setNewComment('');
    } catch (error) {
      console.error('Error sending comment:', error);
    }}
    else
    {
      window.alert("Vui lòng nhập bình luận !");
    }
  };
  const handleRate = async (value) => {
    if (!rated) {
      setRated(value); 
      try {
        const response = await axios.post(`${APIs.APIshareFile}/detail/${id}/rating`, {
          star: value,
          mssv:'1818972',
        });
        if (response){
          fetchData()
        }
      } catch (error) {
        console.error('Error to rating:', error);
      }
      
    } else {
      window.alert("Bạn chỉ có thể đánh giá 1 lần!");
    }
    
  };
  const styles = {
    frame: {
      border:"1px solid #0f6cbf",
      margin: "20px 80px 20px 80px",
      borderRadius: "15px",
      backgroundColor: "#E2ECFF",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    title: {
      color: "#0F6CBF",
      fontWeight: "bold",
      fontSize:"24px",
      paddingBottom:"20px",
    },
    description: {
      color: "gray",
    },
    score:
    {
      color:"#FFD700",
      padding:"10px",
      fontWeight:"bold",
    },
    user: {
      marginTop:"20px",
      color: "gray",
      fontSize:"12px",
    },
    buttonFrame: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems:"center",
    },
    button: {
      margin: "5px",
      backgroundColor: "#0F6CBF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "pointer",
    },
    comment: {
        margin: "20px 80px 20px 80px",
    },
    commentlist:
    {
        borderBottom: "2px solid rgba(15,108,191,10%)", 
        padding: "10px",
        margin:"30px 10px 30px 10px",
        display: "flex",
       justifyContent: "space-between", 
    },
    rating: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      padding:"10px",
    },
    commentText: {
      flex: 1, 
    },
    commentDate: {
      marginLeft: "10px", 
    },
    commentInput: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
    },
    commentTextarea: {
      width: "100%",
      borderRadius: "15px",
      padding: "15px 0 15px 15px",
      margin: "20px 0 20px 20px",
      border: "1px solid gray",
    },
    sendButton: {
      backgroundColor: "#0F6CBF",
      color: "white",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "pointer",
      marginRight:"15px",
    },
  };
 

  const handleDownload = async () => {
    try {
    
    } catch (error) {
      window.alert('Error downloading file...');
    }
  };
  
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmDelete) {
      try {
        const response = await axios.post(`${APIs.APIshareFile}/detail/${id}/delete`);
        navigate('/shared');
        
      } catch (error) {
        console.error('Error Deleting', error);
      }
    } else {
      console.log("Cancel deleting...");
    }
  };

  const handleView = () => {

    console.log("Viewing article...");
    window.open(fileDetails.link, "_blank");
  };

  
  const renderStarRating = () => {
    return (
      <div style={styles.rating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => handleRate(star)}
            style={{ cursor: 'pointer', color: rated >= star ? '#FFD700' : 'gray' }}
          />
        ))}
      </div>
    );
  };
  const handleAuthorization = (role) => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if(name === role) {
        return true
      }
    }
    window.location.href = 'http://localhost:3000/login';
  }
  if(handleAuthorization('Student_cookie_id') == true) {
    return (
      <div>
        
          <div>
            <Link to="/shared">
              <FaBackward style={{ marginLeft: "80px" }} />
            </Link>
            <div style={styles.frame}>
              <div style={styles.header}>
                <div>
                  <h2 style={styles.title}>{fileDetails.name}</h2>
                  <p style={styles.description}>{fileDetails.description}</p>
                  {/* <p style={styles.user}>{article.author}</p> */}
                </div>
                <div style={styles.buttonFrame}>
                  <p style={styles.score}>Score: {fileDetails.score}/5</p>
                  {renderStarRating()}
                  <button onClick={handleView} style={styles.button}>
                    <FaEye />
                  </button>
                  <button onClick={handleDownload} style={styles.button}>
                    <FaDownload />
                  </button>
                  <button onClick={handleDelete} style={styles.button}>
                    <FaTrash />
                    <Link to="/shared">
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div style={styles.comment}>
              <h3 style={{ fontWeight: "bold", fontSize: "150%" }}>Comment</h3>
              <div style={styles.commentInput}>
                <textarea
                  style={styles.commentTextarea}
                  placeholder="Write your comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={handleSendComment} style={styles.sendButton}>
                  Send
                </button>
              </div>
              <h3 style={{ fontWeight: "bold", fontSize: "150%" }}>Other Comments</h3>
              {!commentList || commentList.length === 0 ? (
                <p>No comments yet.</p>
              ) : (
                <ul>
                  {commentList && commentList.map((comment) => (
                    <li key={comment.id} style={styles.commentlist}>
                      {comment.Content}
                      <br />
                      <span style={{ color: "gray", fontSize: "60%" }}>
                        {comment.date}
                        <br />
                      {/* {comment.author} */}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
      </div>
    );
  }
}