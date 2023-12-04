import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaPrint, FaTrash } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaBackward } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
export default function Detail() {
  const { articleId } = useParams();
  const rating = 3; // Change this to your actual rating
  const maxRating = 5; // Change this to your maximum rating
  const article = {
    user:"Nguyễn Ngọc Bảo Châu - 2110842",
    title: "Nguyên lý về mối liên hệ phổ biến",
    description: "Phép biện chứng duy vật được xây dựng trên cơ sở một hệ thống những nguyên lý,những phạm trù cơ bản, những quy luật phổ biến phản ánh đúng đắn hiện thực.........biến phản ánh  ",
  };
  const comments = [
    { id: 1, text: "Comment 1", date:"Fri,October 20, 2023", user:"Nguyễn Văn Bê"},
    { id: 2, text: "Comment 2", date:"Fri,October 20, 2023", user:"Nguyễn Văn Bê" },
    { id: 3, text: "Comment 3", date:"Fri,October 20, 2023", user:"Nguyễn Văn Bê" },
    { id: 4, text: "Comment 3", date:"Fri,October 20, 2023", user:"Nguyễn Văn Bê" },
    { id: 5, text: "Comment 3", date:"Fri,October 20, 2023", user:"Nguyễn Văn Bê"},
    { id: 6, text: "Comment 3", date:"Fri,October 20, 2023", user:"Nguyễn Văn Bê" },
    { id: 7, text: "Comment 3", date:"Fri,October 20, 2023", user:"Nguyễn Văn Bê" },
    { id: 8, text: "Comment 3", date:"Fri,October 20, 2023", user:"Nguyễn Văn Bê" },
  ];
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
    // Implement your comment logic here
    console.log("Sending a comment...");
  };
  // Function to handle downloading the article
  const handleDownload = () => {
    // Implement your download logic here
    console.log("Downloading article...");
  };

  // Function to handle commenting
  const handleDelete = () => {
    // Implement your comment logic here
    console.log("Commenting on the article...");
  };
  const handleView = () => {
    // Implement your comment logic here
    console.log("Commenting on the article...");
  };

  // Function to handle rating
  const handleRate = () => {
    // Implement your rating logic here
    console.log("Rating the article...");
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
        <Link to="/shared" >
          <FaBackward style={{ marginLeft:"80px", }}/>
        </Link>
        <div style={styles.frame}>
          <div style={styles.header}>
            <div>
              <h2 style={styles.title}>{article.title}</h2>
              <p style={styles.description}>{article.description}</p>
              <p style={styles.user}>{article.user}</p>
            </div>
            <div style={styles.buttonFrame}>
              <button onClick={handleView} style={styles.button}>
                <FaEye />
              </button>
              <button onClick={handleDownload} style={styles.button}>
                <FaDownload />
              </button>
              <button onClick={handleRate} style={styles.button}>
                <FaPrint />
              </button>
              <button onClick={handleDelete} style={styles.button}>
                <FaTrash />
              </button>
              <div style={styles.rating}>
                {Array.from({ length: maxRating }, (_, index) => (
                  <FaStar
                    key={index}
                    style={{
                      color: index < rating ? 'gold' : 'grey',
                      fontSize: '24px',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={styles.comment}>
          <h3 style={{fontWeight:"bold",fontSize:"150%"}}>Comment</h3>
          <div style={styles.commentInput}> 
              <textarea
                style={styles.commentTextarea}
                placeholder="Write your comment..."
              />
              <button onClick={handleSendComment} style={styles.sendButton}>
                Send
              </button>
          </div>
          <h3 style={{fontWeight:"bold",fontSize:"150%"}}>Các bình luận khác</h3>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} style={styles.commentlist}>
                {comment.text}
                <br></br>
                <span style={{color:"gray",fontSize:"60%"}}>{comment.date}<br/>{comment.user}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}