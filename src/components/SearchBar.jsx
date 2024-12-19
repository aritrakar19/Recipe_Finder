import React, { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <input
          type="text"
          placeholder="Search for restaurants, dishes, or cuisines..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button
          style={styles.button}
          onClick={handleSearch}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
        >
          <i className="fas fa-search" style={styles.icon}></i>
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: "30px 0",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "25px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    width: "80%",
    maxWidth: "800px",
  },
  input: {
    flex: 1,
    padding: "12px 15px",
    border: "none",
    outline: "none",
    fontSize: "16px",
    color: "#333",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5757",
    color: "white",
    padding: "15px 22px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#e04c4c",
  },
  // icon: {
  //   marginRight: "8px",
  // },
  // Media query styles using JavaScript conditions
  responsiveStyles: {
    container: {
      flexDirection: window.innerWidth <= 768 ? "column" : "row",
      width: window.innerWidth <= 480 ? "95%" : window.innerWidth <= 768 ? "90%" : "80%",
    },
    input: {
      padding: window.innerWidth <= 480 ? "8px" : window.innerWidth <= 768 ? "10px" : "12px",
      fontSize: window.innerWidth <= 480 ? "12px" : window.innerWidth <= 768 ? "14px" : "16px",
    },
    button: {
      padding: window.innerWidth <= 480 ? "8px" : window.innerWidth <= 768 ? "10px" : "12px",
      fontSize: window.innerWidth <= 480 ? "12px" : window.innerWidth <= 768 ? "14px" : "14px",
      marginTop: window.innerWidth <= 768 ? "10px" : "0",
    },
  },
};

export default SearchBar;
