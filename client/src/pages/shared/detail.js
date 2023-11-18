import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { FaPrint, FaTrash } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaStar, FaBackward, FaEye } from 'react-icons/fa';
import data from './dataSharedfile.js';

export default function Detail() {
  const { id } = useParams();
  const [rated, setRated] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [article, setArticle] = useState(data.sharedfilesList.find((item) => item.id === parseInt(id)));
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
      flex: 1, // Takes up available space (pushes date to the right)
    },
    commentDate: {
      marginLeft: "10px", // Adds some space to the left of the date
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
  const handleSendComment = () => {
    if (newComment.trim() !== '') {
      // Gửi comment
      window.confirm("Bạn có muốn gửi bình luận không?");
      console.log('Comment sent');
    } else {
      // Hiển thị cảnh báo nếu comment trống
      window.alert('Vui lòng nhập bình luận trước khi gửi.');
    }
  };

  const handleDownload = () => {
    // Implement your download logic here
    console.log("Downloading article...");
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa không?");
    if (confirmDelete) {
      console.log("Deleting article...");
    } else {
      console.log("Cancel deleting...");
    }
  };

  const handleView = () => {

    console.log("Viewing article...");
  };

  const handleRate = (value) => {
    if(!rated)
    {
      console.log(`Rating the article with ${value} stars...`);
      const updatedArticle = { ...article, rating: value };
      setArticle(updatedArticle);
      setRated(true);
    }
    else
    {
      window.alert("Bạn chỉ có thể đánh giá 1 lần!");
    }
    
  };
  const renderStarRating = () => {
    return (
      <div style={styles.rating}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => handleRate(star)}
            style={{ cursor: 'pointer', color: article.rating >= star ? '#FFD700' : 'gray' }}
          />
        ))}
      </div>
    );
  };
  return (
    <div>
      <Link to="/shared">
        <FaBackward style={{ marginLeft: "80px" }} />
      </Link>
      <div style={styles.frame}>
        <div style={styles.header}>
          <div>
            <h2 style={styles.title}>{article.title}</h2>
            <p style={styles.description}>{article.description}</p>
            <p style={styles.user}>{article.autor}</p>
          </div>
          <div style={styles.buttonFrame}>
          <p style={styles.score}>Score: {article.score}</p>
          {renderStarRating()}
            <button onClick={handleView} style={styles.button}>
              <FaEye />
            </button>
            <button onClick={handleDownload} style={styles.button}>
              <FaDownload />
            </button>
            <button onClick={handleDelete} style={styles.button}>
              <FaTrash />
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
        <h3 style={{ fontWeight: "bold", fontSize: "150%" }}>Các bình luận khác</h3>
        <ul>
          {article.commentlist.map((comment) => (
            <li key={comment.id} style={styles.commentlist}>
              {comment.text}
              <br></br>
              <span style={{ color: "gray", fontSize: "60%" }}>{comment.date}<br/>{comment.autor}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}