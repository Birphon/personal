import pygame
from base import Base
from resources import load_images

pygame.init()

# Constants
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
FPS = 30

# Initialize screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("RimWorld Base Designer")

# Load resources
images = load_images()

# Create a base object
base = Base(SCREEN_WIDTH, SCREEN_HEIGHT, images)

# Main game loop
clock = pygame.time.Clock()
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    screen.fill((255, 255, 255))
    
    # Update and render the base
    base.update()
    base.draw(screen)

    pygame.display.flip()
    clock.tick(FPS)

pygame.quit()
