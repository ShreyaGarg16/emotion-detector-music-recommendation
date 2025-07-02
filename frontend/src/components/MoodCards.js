
import React from 'react';
import './MoodCards.css';
import happy from '../assets/happy.jpg';
import sad from '../assets/sad.jpg';
import relaxed from '../assets/relaxed.jpg';
import angry from '../assets/angry.jpg';

const MoodCards = () => {
  return (
    <section className="mood-section">
      <h2>Moods We Understand 🎭</h2>
      <div className="mood-images">
        <div>
          <img src={happy} alt="Happy" />
          <p>Happy</p>
        </div>
        <div>
          <img src={sad} alt="Sad" />
          <p>Sad</p>
        </div>
        <div>
          <img src={relaxed} alt="Relaxed" />
          <p>Relaxed</p>
        </div>
        <div>
          <img src={angry} alt="Angry" />
          <p>Angry</p>
        </div>
      </div>
    </section>
  );
};

export default MoodCards;
