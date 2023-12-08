import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
export default function History() {
  const [isInputFocused, setInputFocused] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(""); 
  const articles = [
    { 
      title: "Nguyên lý về mối liên hệ phổ biến",
      time: "Thời gian in: 08:31 - 07/11/2023",
      paper: "Số giấy sử dụng: 70"
    },
    {
      title: "Ôn tập cuối kì",
      time: "Thời gian in: 10:31 - 09/12/2023",
      paper: "Số giấy sử dụng: 20"
    },
    {
      title: "Hóa học vô cơ (Chem2022)",
      time: "Thời gian in: 21:31 - 02/10/2023",
      paper: "Số giấy sử dụng: 80"
    },
    {
      title: "Ôn tập cuối kì",
      time: "Thời gian in: 09:31 - 07/11/2023",
      paper: "Số giấy sử dụng: 90",
    },
    {
      title: "Hóa học vô cơ (Chem2022)",
      time: "Thời gian in: 12:31 - 12/12/2023",
      paper: "Số giấy sử dụng: 20",
    },
    {
      title: "Nguyên lý về mối liên hệ phổ biến",
      time: "Thời gian in: 07:31 - 04/12/2023",
      paper: "Số giấy sử dụng: 15",},
    {
      title: "Ôn tập cuối kì",
      time: "Thời gian in: 06:31 - 05/12/2023",
      paper: "Số giấy sử dụng: 50",
    },
    {
      title: "Hóa học vô cơ (Chem2022)",
      time: "Thời gian in: 08:31 - 06/12/2023",
      paper: "Số giấy sử dụng: 30",
    },
    {
      title: "Nguyên lý về mối liên hệ phổ biến",
      time: "Thời gian in: 11:31 - 07/12/2023",
      paper: "Số giấy sử dụng: 40",},
    {
      title: "Ôn tập cuối kì",
      time: "Thời gian in: 13:31 - 09/12/2023",
      paper: "Số giấy sử dụng: 20",    },
    {
      title: "Hóa học vô cơ (Chem2022)",
      time: "Thời gian in: 09:31 - 09/12/2023",
      paper: "Số giấy sử dụng: 30",    },
    {
      title: "Nguyên lý về mối liên hệ phổ biến",
      time: "Thời gian in: 10:31 - 08/12/2023",
      paper: "Số giấy sử dụng: 50",},
    {
      title: "Ôn tập cuối kì",
      time: "Thời gian in: 05:31 - 04/12/2023",
      paper: "Số giấy sử dụng: 40",    },
    {
      title: "Hóa học vô cơ (Chem2022)",
      time: "Thời gian in: 02:31 - 010/12/2023",
      paper: "Số giấy sử dụng: 19",    },
  ];
  const styles = {
    topframe: {
      width: "auto",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      margin:"40px auto 40px 120px",
    },
    search: {
      border: isInputFocused ? "none" : "0.5px solid #0F6CBF",
      borderRadius: "15px",
      width: "80%",
      height:"40px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    searchInput: {
      border: "none",
      width: "95%",
      borderRadius: "15px",
      paddingLeft: "10px",
    },
    searchIcon: {
      marginRight: "10px",
      width: "3%",
      color:"gray",
    },
    filterButton: {
      marginLeft: "10px",
      cursor: "pointer",
      border:"1px solid #0F6CBF",
      borderRadius:"15px",
      padding:"0 30px 0 0",
      height:"40px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      color:"gray",

    },
    filterDialog: {
      display: isFilterOpen ? "block" : "none",
      position: "absolute",
      top: "40px",
      right: 0,
      border: "0.5px solid #0F6CBF",
      padding: "10px",
      borderRadius: "15px",
      backgroundColor: "white",
    },
    select: {
      width: "100%",
      border: "1px solid white",
      borderRadius: "15px",
      padding: "5px",
      marginBottom: "10px",
      color:"white",
      backgroundColor: "#0F6CBF",
    },
    filterIcon:
    {
      marginLeft: "10px",
      marginRight:"10px",
      width: "30px",
    },
    content: {
      display:"block",
      padding:"0 40px",
      margin:"0 40px",
    },
    article: {
      borderBottom: "2px solid rgba(15,108,191,10%)", 
      padding: "10px",
    },
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };
  const handleFilterSelect = (value) => {
    setSelectedFilter(value); 
    setIsFilterOpen(false);
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
      <div style={{ display: "block", justifyContent: "center" }}>
        <div style={styles.topframe}>
          <div style={styles.search}>
            <FaSearch style={styles.searchIcon} />
            <input
              style={styles.searchInput}
              placeholder="Tìm lịch sử in của bạn ..."
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
          <div style={styles.filterButton} onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <FaFilter style={styles.filterIcon} /> Filter
          </div>
        </div>
        <div style={styles.filterDialog}>
          <label>Sắp xếp theo:</label>
          <select
            style={styles.select}
            value={selectedFilter}
            onChange={(e) => handleFilterSelect(e.target.value)}
          >
            <option value="timeAscending">Thời gian tăng dần</option>
            <option value="timeDescending">Thời gian giảm dần</option>
            <option value="rating">Đánh giá</option>
            <option value="sizeAscending">Kích thước tăng dần</option>
            <option value="sizeDescending">Kích thước giảm dần</option>
          </select>
        </div>
        <div style={styles.content}>
        {articles.map((article, index) => (
          <div key={index} style={styles.article}>
            <h2 style={{ color: "#0F6CBF", fontSize: "120%", paddingBottom:"5px"}}>
              {article.title}
            </h2>
            <p style={{color:"gray"}}>{article.time}</p>
            <p style={{color:"gray"}}>{article.paper}</p>
          </div>
        ))}
      </div>
      </div>
    );
  }
}

