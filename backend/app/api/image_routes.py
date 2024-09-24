from fastapi import APIRouter, File, UploadFile
from PIL import Image
import numpy as np
from models.model_loader import load_trained_model

router = APIRouter()

# Load the pre-trained model
model = load_trained_model()


def preprocess_image(image_file):
    img = Image.open(image_file)
    img = img.resize((224, 224))
    img_array = np.array(img) / 255.0
    return np.expand_dims(img_array, axis=0)


@router.post("/predict")
async def predict_image(file: UploadFile = File(...)):
    image = preprocess_image(file.file)
    predictions = model.predict(image)
    predicted_class = np.argmax(predictions, axis=1)
    return {"predicted_class": int(predicted_class)}
