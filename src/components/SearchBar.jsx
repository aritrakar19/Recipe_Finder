import React, { useState } from "react";

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
          <i className="fas fa-search" style={styles.icon}></i> Search
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
    padding: "12px 20px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#e04c4c",
  },
  icon: {
    marginRight: "8px",
  },
  // Responsive styles for tablets and smaller screens
  "@media (max-width: 768px)": {
    container: {
      width: "90%",
      flexDirection: "column",
    },
    input: {
      padding: "10px",
      fontSize: "14px",
    },
    button: {
      padding: "10px",
      fontSize: "12px",
      marginTop: "10px",
    },
  },
  "@media (max-width: 480px)": {
    container: {
      width: "95%",
    },
    input: {
      padding: "8px",
      fontSize: "12px",
    },
    button: {
      padding: "8px",
      fontSize: "12px",
    },
  },
};

export default SearchBar;
