import React, { useState, useEffect } from "react";
import Home from "./src/components/pages/Home.jsx"
import Header from "./src/components/Header.jsx";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./src/shared/body.css"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* footer*/}
    </Router>
  );
}

export default App;
