from tensorflow.keras.callbacks import ModelCheckpoint
from model import create_model
from data_preprocessing import preprocess_data

# Paths
train_dir = "data/train/"
test_dir = "data/test/"

# Preprocess the data
train_generator, test_generator = preprocess_data(train_dir, test_dir)

# Create and train the model
model = create_model(num_classes=train_generator.num_classes)

# Save the best model
checkpoint = ModelCheckpoint(
    'models/image_model.h5', save_best_only=True, monitor='val_loss', mode='min')

# Train the model
model.fit(train_generator, epochs=20,
          validation_data=test_generator, callbacks=[checkpoint])
