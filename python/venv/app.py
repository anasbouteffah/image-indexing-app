from flask import Flask, request, jsonify
import cv2
import numpy as np

app = Flask(__name__)

@app.route('/get_descriptors', methods=['POST'])
def get_descriptors():
    file = request.files['image']
    img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    descriptors = calculate_descriptors(img)
    return jsonify(descriptors)

def calculate_descriptors(image):
    hist = cv2.calcHist([image], [0], None, [256], [0, 256])
    return hist.flatten().tolist()

if __name__ == '__main__':
    app.run(debug=True)
