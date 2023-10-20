import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaPrint } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaBackward } from "react-icons/fa";
export default function Detail() {
  const { articleId } = useParams();
  const rating = 4; // Change this to your actual rating
  const maxRating = 5; // Change this to your maximum rating
  const article = {
    title: "Sample Article",
    description: "This is a sample article description. ",
  };
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
  ];
  const styles = {
    frame: {
      border:"1px solid #0f6cbf",
      margin: "20px 80px 20px 80px",
      borderRadius: "15px",
      backgroundColor: "#CEE8FF",
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
    },
    rating: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
    },
  };

  // Function to handle downloading the article
  const handleDownload = () => {
    // Implement your download logic here
    console.log("Downloading article...");
  };

  // Function to handle commenting
  const handleComment = () => {
    // Implement your comment logic here
    console.log("Commenting on the article...");
  };

  // Function to handle rating
  const handleRate = () => {
    // Implement your rating logic here
    console.log("Rating the article...");
  };

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
          </div>
          <div style={styles.buttonFrame}>
            <button onClick={handleDownload} style={styles.button}>
              <FaDownload />
            </button>
            <button onClick={handleRate} style={styles.button}>
              <FaPrint />
            </button>
            <button onClick={handleComment} style={styles.button}>
              <FaComment />
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
        <h3 style={{fontWeight:"bold",fontSize:"150%"}}>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} style={styles.commentlist}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
