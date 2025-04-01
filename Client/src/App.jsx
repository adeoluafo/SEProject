import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext, RecipesContext } from "./UserContext.js";
import HomePage from "./Pages/HomePage/Homepage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //initialize all isecontext variables
  const [userContext, setUserContext] = useState(() => {
    try {
      const storedUser = localStorage.getItem("userContext");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing stored user:", error);
      return null;
    }
  });
  const [recipesContext, setRecipesContext] = useState(() => {
    try {
      const storedRecipes = localStorage.getItem("recipesContext");
      return storedRecipes ? JSON.parse(storedRecipes) : null;
    } catch (error) {
      console.error("Error parsing stored recipes:", error);
      return null;
    }
  });

  useEffect(() => {
    // Save the usecontext data to storage whenever the state changes
    if (userContext) {
      localStorage.setItem("userContext", JSON.stringify(userContext));
    } else {
      localStorage.removeItem("userContext");
    }
    if (recipesContext) {
      localStorage.setItem("recipesContext", JSON.stringify(recipesContext));
    } else {
      localStorage.removeItem("recipesContext");
    }
  }, [userContext, recipesContext]);
  //wrap the usecontext around your declared routes
  return (
    <div className="app">
      <UserContext.Provider value={{ userContext, setUserContext }}>
        <RecipesContext.Provider value={{ recipesContext, setRecipesContext }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </RecipesContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
