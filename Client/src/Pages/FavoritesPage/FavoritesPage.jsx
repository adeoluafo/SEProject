import React from "react";
import "./FavoritesPage.css";
import TopBar from "../../Components/TopBar/TopBar";
import Footer from "../../Components/Footer/Footer";
import { FavoritesContext } from "../../UserContext";
import { useState, useContext, useEffect } from "react";

export default function FavoritesPage() {
  const { favoritesContext } = useContext(FavoritesContext);
  const favorites = favoritesContext.favorites;
  const [recipes, setRecipes] = useState([]);
  //   useEffect(()=>{
  //     const fetchRecipes = async()=>{

  //     }
  //   },[])
  console.log(favorites);
  return (
    <div>
      <TopBar />
      <div className="grid-container">
        {/* {favoritesContext &&
          favorites.map(
            (recipe) =>
              recipe.is_published == true && (
                <RecipeCard
                  key={recipe.id}
                  image={recipe.image_url}
                  title={recipe.title}
                  id={recipe.id}
                />
              )
          )} */}
      </div>
      <Footer />
    </div>
  );
}
