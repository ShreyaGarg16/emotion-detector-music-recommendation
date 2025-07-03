// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DetectMood from "./components/DetectMood"; // ⬅️ Import your new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/detect" element={<DetectMood />} />
      </Routes>
    </Router>
  );
}

export default App;


