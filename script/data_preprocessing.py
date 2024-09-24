from tensorflow.keras.preprocessing.image import ImageDataGenerator

def preprocess_data(train_dir, test_dir, img_size=(224, 224), batch_size=32):
    # Data generator for training set with augmentation
    train_datagen = ImageDataGenerator(rescale=1./255, rotation_range=20, zoom_range=0.2, horizontal_flip=True)
    
    train_generator = train_datagen.flow_from_directory(
        train_dir, target_size=img_size, batch_size=batch_size, class_mode='categorical')

    # Data generator for validation/test set without augmentation
    test_datagen = ImageDataGenerator(rescale=1./255)
    
    test_generator = test_datagen.flow_from_directory(
        test_dir, target_size=img_size, batch_size=batch_size, class_mode='categorical')

    return train_generator, test_generator
