from tensorflow.keras.models import load_model
from data_preprocessing import preprocess_data

test_dir = "data/test/"
_, test_generator = preprocess_data(None, test_dir)

# Load the trained model
model = load_model('models/image_model.h5')

# Evaluate the model
loss, accuracy = model.evaluate(test_generator)
print(f"Test Accuracy: {accuracy}")
