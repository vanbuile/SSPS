import React, { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { FaFilter } from 'react-icons/fa';
import axios from "axios";
import APIs from "../../util/API.js";
export default function Shared() {
  const [isInputFocused, setInputFocused] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(""); 
  const [dataFromServer, setDataFromServer] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]); 
  const [filterKeyword, setFilterKeyword] = useState([]); 

  useEffect(async () => {
    const fetchData = async () => {
      try {
        const url = APIs.APIshareFile + "/";
        const response = await axios.get(url);
        setDataFromServer(response.data.data); 
        //console.log(response.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data.message);
        }
      }
    };

    fetchData();
  }, []);
  const handleSearch = async () => {
    try {
      let url = APIs.APIshareFile + "/";
      if (filterKeyword) {
        url = `${APIs.APIshareFile}/?search=${searchKeyword}&sort=${filterKeyword}`;
      } else {
        url = `${APIs.APIshareFile}/?search=${searchKeyword}`;
      }
      const response = await axios.get(url);
      setSearchResults(response.data.data);
      //console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };
  const handleFilterSelect = async (value) => {
    setSelectedFilter(value); 
    setFilterKeyword(value);
    setIsFilterOpen(false);
    try {
      let url = APIs.APIshareFile + "/";
      if (searchKeyword) {
        url = `${APIs.APIshareFile}/?search=${searchKeyword}&sort=${value}`;
      } else {
        url = `${APIs.APIshareFile}/?sort=${value}`;
      }
      const response = await axios.get(url);
      setSearchResults(response.data.data);
      //console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      }
    }
  };
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
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); 
    }
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
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            onKeyDown={handleKeyPress} 
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
          <option value="star_desc">Đánh giá cao</option>
          <option value="star_asc">Đánh giá thấp</option>
        </select>
      </div>
      <div style={styles.content}>
      {searchResults.length > 0 ? (
  searchResults.map((article, index) => (
    <div key={index} style={styles.article}>
      <h2 style={{ color: "#0F6CBF", fontSize: "120%", paddingBottom: "5px" }}>
        <Link to={`/detail/${article.id}`}>{article.name}</Link>
      </h2>
      <p style={{ color: "gray" }}>{article.description}</p>
    </div>
  ))
) : (
  dataFromServer.map((article, index) => (
    <div key={index} style={styles.article}>
      <h2 style={{ color: "#0F6CBF", fontSize: "120%", paddingBottom: "5px" }}>
        <Link to={`detail/${article.ID}`}>{article.name}</Link>
      </h2>
      <p style={{ color: "gray" }}>{article.description}</p>
    </div>
  ))
)}
    </div>
    </div>
  );
}