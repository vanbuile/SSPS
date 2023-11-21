import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
export default function Shared() {
  const [isInputFocused, setInputFocused] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(""); 
  
  const datafile = data.sharedfilesList;
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
      padding:"0 30px 0 30px",
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
          <FaSearch style={styles.searchIcon} />
          <input
            style={styles.searchInput}
            placeholder="Tìm kiếm tài liệu bạn cần ..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>
        <div style={styles.filterButton}>
        <FaFilter isOpen={isFilterOpen} onClick={() => setIsFilterOpen(!isFilterOpen)} /> Filter
        </div>
      </div>
      <div style={styles.filterDialog}>
        <select
          style={styles.select}
          value={selectedFilter}
          onChange={(e) => handleFilterSelect(e.target.value)}
        >
          <option value="timeAscending">Ngày đăng mới nhất</option>
          <option value="timeDescending">Ngày đăng cũ nhất</option>
          <option value="rating">Đánh giá cao</option>
        </select>
      </div>
      <div style={styles.content}>
     {datafile.map((article, index) => (
        <div key={index} style={styles.article}>
          <h2 style={{ color: "#0F6CBF", fontSize: "120%", paddingBottom: "5px" }}>
          <Link to={`/detail/${article.id}`}>{article.title}</Link>
          </h2>
          <p style={{ color: "gray" }}>{article.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}