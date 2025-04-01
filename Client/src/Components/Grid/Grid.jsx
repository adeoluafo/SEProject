import React from "react";
import "./Grid.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useContext } from "react";
import { RecipesContext } from "../../UserContext";

export default function Grid({ duration, difficulty, cuisine, diet, keyword }) {
  const { recipesContext } = useContext(RecipesContext);
  // function whatToParse() {
  //   let tempRecipes = [...recipesContext];
  //   if (duration != "All") {
  //     tempRecipes = tempRecipes.filter((recipe) => {
  //       if (job.type.toLowerCase() == filter.toLowerCase()) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  // }
  console.log(recipesContext);
  return (
    <div className="grid-container">
      {" "}
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </div>
  );
}
