import React, { useState } from "react";
import searchIcon from "../../assets/images/search_icon.png";
import filterIcon from "../../assets/images/filter.png";
export default function Shared() {
  const [isInputFocused, setInputFocused] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(""); 
  const articles = [
    {
      title: "File 1",
      description: "Mo ta" },
    {
      title: "Bài 2",
      description: "Mô tả  2",
    },
    {
      title: "Bài 3",
      description: "Mô tả 3",
    },
    {
      title: "Bài 3",
      description: "Mô tả 3",
    },
    {
      title: "Bài 3",
      description: "Mô tả 3",
    },
    {
      title: "Bài 3",
      description: "Mô tả 3",
    },
    {
      title: "Bài 3",
      description: "Mô tả 3",
    },
    {
      title: "Bài 3",
      description: "Mô tả 3",
    },
    {
      title: "Bài 3",
      description: "Mô tả 3",
    },
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

  return (
    <div style={{ display: "block", justifyContent: "center" }}>
      <div style={styles.topframe}>
        <div style={styles.search}>
          <img src={searchIcon} alt="Search" style={styles.searchIcon} />
          <input
            style={styles.searchInput}
            placeholder="Tìm kiếm tài liệu bạn cần ..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={styles.filterButton} onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <img src={filterIcon} alt="Filter" style={styles.filterIcon} /> Filter
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
          <h1 style={{color:"#0F6CBF",fontSize:"150%"}}>{article.title}</h1>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}

