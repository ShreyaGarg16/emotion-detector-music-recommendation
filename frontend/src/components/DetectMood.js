import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./DetectMood.css";

const DetectMood = () => {
  const webcamRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const spotifyLinks = {
    happy: "https://open.spotify.com/playlist/0FXLb2vM793vQmM8bkv2sG",
    sad: "https://open.spotify.com/playlist/6yJPtgmA6eyVfzbH93VVHf",
    angry: "https://open.spotify.com/playlist/4CzJEjWbFlmgOj8MbcDpUa",
    relaxed: "https://open.spotify.com/playlist/5FnkPTdZ9vnMsoKmJOofRd",
  };

  const emotionToMood = {
    happy: "happy",
    sad: "sad",
    angry: "angry",
    relaxed: "relaxed",
    neutral: "relaxed",
    fear: "sad",
    disgust: "angry",
    surprise: "happy",
  };

  const handleMoodDetection = async () => {
    setLoading(true);
    setMessage("Analyzing your mood... 🎭");

    const screenshot = webcamRef.current.getScreenshot();
    if (!screenshot) {
      setMessage("Could not capture image. Try again.");
      setLoading(false);
      return;
    }

    const base64Data = screenshot.split(",")[1];

    try {
      const response = await fetch("http://localhost:5000/detect_emotion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: base64Data }),
      });

      const result = await response.json();

      if (result.emotion) {
        const detectedEmotion = result.emotion.toLowerCase();
        const mood = emotionToMood[detectedEmotion];

        if (mood && spotifyLinks[mood]) {
          setMessage(`Detected Mood: ${mood.toUpperCase()} 🎵`);
          setTimeout(() => {
            window.open(spotifyLinks[mood], "_blank");
          }, 1500);
        } else {
          setMessage(`Detected Mood: ${detectedEmotion} ❌ No playlist available`);
        }
      } else {
        setMessage("Could not detect your mood. Please try again.");
      }
    } catch (error) {
      console.error("Error detecting mood:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detect-page">
      <h2>Let’s Detect Your Mood 😊</h2>
      <p>Make sure your face is visible in the camera</p>

      <div className="camera-container">
        <Webcam
          ref={webcamRef}
          audio={false}
          height={360}
          screenshotFormat="image/jpeg"
          width={480}
          videoConstraints={{
            width: 480,
            height: 360,
            facingMode: "user",
          }}
        />
      </div>

      <button className="btn-detect" onClick={handleMoodDetection} disabled={loading}>
        {loading ? "Detecting..." : "Capture Mood"}
      </button>

      {message && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>}
    </div>
  );
};

export default DetectMood;

