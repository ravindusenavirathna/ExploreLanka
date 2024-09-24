from tensorflow.keras.models import load_model


def load_trained_model():
    model = load_model('models/image_model.h5')
    return model
