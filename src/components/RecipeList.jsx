import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div style={styles.container}>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.idMeal} style={styles.cardContainer}>
            <RecipeCard recipe={recipe} />
          </div>
        ))
      ) : (
        <p style={styles.noRecipes}>
          No recipes found. Try a different search!
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    marginTop: "20px",
    padding: "0 20px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  noRecipes: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#888",
    fontSize: "18px",
    fontStyle: "italic",
    padding: "20px",
  },
};

export default RecipeList;
