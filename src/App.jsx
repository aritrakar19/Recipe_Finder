import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto py-8">
        <SearchBar onSearch={fetchRecipes} />
        {loading ? (
          <p className="text-center text-gray-500 mt-8">Loading...</p>
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>© 2024 Food Recipe Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
