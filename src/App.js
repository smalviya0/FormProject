import React, { useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Navbar1 from "./Pages/Navbar1";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import ProtectedRoute from "./Components/Protected";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // perform logout logic here
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Navbar1 loggedIn={loggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="/contact" element={<Contact />} />

        {/* <ProtectedRoute path="/about" element={<About />} />
            <ProtectedRoute path="/contact" element={<Contact/>} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
