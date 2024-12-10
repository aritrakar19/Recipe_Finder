import React from "react";

const RecipeCard = ({ recipe }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{recipe.strMeal}</h3>
          <p className="text-sm text-gray-500">{recipe.strCategory}</p>
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 mt-2 inline-block hover:underline"
          >
            View Recipe
          </a>
        </div>
      </div>
    );
  };
  
  export default RecipeCard;
  