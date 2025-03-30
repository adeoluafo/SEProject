import React from "react";
import "./Grid.css";
import RecipeCard from "../RecipeCard/RecipeCard";

export default function Grid() {
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
