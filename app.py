from flask import Flask, request, jsonify
from flask_cors import CORS
from deepface import DeepFace
import cv2
import numpy as np
import base64

app = Flask(__name__)
CORS(app)  # Allow requests from frontend (different origin)

@app.route('/detect_emotion', methods=['POST'])
def detect_emotion():
    try:
        # Get base64 image string from frontend
        data = request.json['image']
        
        # Decode the base64 image
        image_data = base64.b64decode(data)
        np_arr = np.frombuffer(image_data, np.uint8)
        img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

        # Analyze image using DeepFace
        result = DeepFace.analyze(img, actions=['emotion'])
        
        # Get the main emotion detected
        emotion = result[0]['dominant_emotion']

        return jsonify({'emotion': emotion})

    except Exception as e:
        return jsonify({'error': str(e)})

# Run the Flask app
if __name__ == '__main__':
    app.run(port=5000)
