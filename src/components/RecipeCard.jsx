import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div style={styles.card}>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        style={styles.image}
      />
      <div style={styles.content}>
        <h3 style={styles.title}>{recipe.strMeal}</h3>
        <p style={styles.category}>{recipe.strCategory}</p>
        <a
          href={recipe.strSource}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          View Recipe
        </a>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    margin: "15px",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "15px",
    textAlign: "center",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  category: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "10px",
  },
  link: {
    display: "inline-block",
    color: "#ff5757",
    textDecoration: "none",
    fontWeight: "bold",
    marginTop: "10px",
    transition: "color 0.3s ease",
  },
};

export default RecipeCard;
