import pygame
from tile import Tile

class Base:
    def __init__(self, width, height, images):
        self.width = width
        self.height = height
        self.tiles = [[Tile(x, y, images['grass']) for x in range(10)] for y in range(10)]

    def update(self):
        pass

    def draw(self, surface):
        for row in self.tiles:
            for tile in row:
                tile.draw(surface)
