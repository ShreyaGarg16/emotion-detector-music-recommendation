// src/components/MusicHealing.js
import React, { useState } from "react";
import "./MusicHealing.css";

const videoData = [
  {
    mood: "Happy",
    videoId: "M-Vus7kqy1o",
    thumbnail: "https://img.youtube.com/vi/M-Vus7kqy1o/0.jpg",
  },
  {
    mood: "Sad",
    videoId: "Jy-dLvnJaw8",
    thumbnail: "https://img.youtube.com/vi/Jy-dLvnJaw8/0.jpg",
  },
  {
    mood: "Angry",
    videoId: "G0OGEk45e24",
    thumbnail: "https://img.youtube.com/vi/G0OGEk45e24/0.jpg",
  },
  {
    mood: "Relaxed",
    videoId: "DEWzT1geuPU",
    thumbnail: "https://img.youtube.com/vi/DEWzT1geuPU/0.jpg",
  },
];

const MusicHealing = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="healing-section">
      <h2>🎶 How Music Can Heal</h2>
      <p>Tap on your mood to experience healing through music.</p>
      <div className="video-grid">
        {videoData.map((video, index) => (
          <div key={index} className="video-card">
            <h4>{video.mood}</h4>
            {activeVideo === index ? (
              <iframe
                width="100%"
                height="215"
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                title={video.mood}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={video.thumbnail}
                alt={video.mood}
                className="video-thumbnail"
                onClick={() => setActiveVideo(index)}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MusicHealing;
