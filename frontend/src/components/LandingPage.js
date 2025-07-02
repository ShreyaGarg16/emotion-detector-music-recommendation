import React from "react";
import "./LandingPage.css";
import MoodCarousel from "./MoodCarousel";  // ✅ Use this instead of MoodCards
import MusicHealing from "./MusicHealing";
import About from "./About";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={require("../assets/logo.jpg")} alt="Logo" className="logo-img" />
        <div className="logo">MoodScanFM</div>
        <div className="nav-buttons">
          <button className="btn">Login</button>
          <button className="btn">Signup</button>
        </div>
      </nav>

      <section className="hero">
        <h1>Discover Music Based on Your Mood 🎧</h1>
        <p>Let music heal you — with just a smile or a frown.</p>
      </section>

      <MoodCarousel />   {/* ✅ Carousel appears here */}

      <MusicHealing />

      <div className="start-section">
        <button className="start-btn">Start Now</button>
      </div>

      <About />
      <Contact />

      <footer className="footer">© 2025 EmotionTune. All rights reserved.</footer>
    </div>
  );
};

export default LandingPage;
