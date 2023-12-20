import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Page from "./main_page";
import Home from "./pages/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />         
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<Login />} />   
        <Route path="/signup" element={<Signup />} /> 
      </Routes>
    </Router>
  );
}

export default App;
