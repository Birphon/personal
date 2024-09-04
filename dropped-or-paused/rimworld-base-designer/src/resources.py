import os
import pygame

def load_images():
    images = {}
    image_dir = os.path.join('assets', 'tiles')  # Construct the image directory path using os.path.join

    for filename in os.listdir(image_dir):
        name, ext = os.path.splitext(filename)
        if ext == '.png':
            image = pygame.image.load(os.path.join(image_dir, filename)).convert_alpha()
            images[name] = image

    return images
