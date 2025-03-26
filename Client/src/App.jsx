// const Signup = async () => {
//   // const { data, error } = await supabase.auth.signUp({
//   //   email: "obiagelichinyere566@gmail.com",
//   //   password: "password1",
//   // });
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: "obiagelichinyere566@gmail.com",
//     password: "password1",
//   });
//   console.log(data);
// };
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./UserContext.js";
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

  useEffect(() => {
    // Save the usecontext data to storage whenever the state changes
    if (userContext) {
      localStorage.setItem("userContext", JSON.stringify(userContext));
    } else {
      localStorage.removeItem("userContext");
    }
  }, [userContext]);
  //wrap the usecontext around your declared routes
  return (
    <div className="app">
      <UserContext.Provider value={{ userContext, setUserContext }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
