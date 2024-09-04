using System;
using System.Collections.Generic;

namespace ForestLife.GameLogic
{
    public class Animal
    {
        public string Name { get; }
        public char Representation { get; }
        public bool IsAdult { get; }
        public int X { get; set; }
        public int Y { get; set; }

        public Animal(string name, char representation, bool isAdult)
        {
            Name = name;
            Representation = representation;
            IsAdult = isAdult;
        }

        public void Draw(Map map)
        {
            map.SetTile(X, Y, Representation);
        }
    }

    public class Map
    {
        private char[,] tiles;
        private List<Animal> animals;

        public Map(int width, int height)
        {
            tiles = new char[width, height];
            animals = new List<Animal>();
        }

        public void SetTile(int x, int y, char tile)
        {
            tiles[x, y] = tile;
        }

        public void AddAnimal(Animal animal)
        {
            animals.Add(animal);
        }

        public void Draw()
        {
            int width = tiles.GetLength(0);
            int height = tiles.GetLength(1);

            Console.Clear();

            for (int y = 0; y < height; y++)
            {
                for (int x = 0; x < width; x++)
                {
                    Console.Write(tiles[x, y]);
                }
                Console.WriteLine();
            }

            foreach (var animal in animals)
            {
                animal.Draw(this);
            }
        }
    }
}
