import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))
      ) : (
        <p className="col-span-3 text-center text-gray-500">
          No recipes found. Try a different search!
        </p>
      )}
    </div>
  );
};

export default RecipeList;
