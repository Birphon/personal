using System;
using System.IO;
using System.Linq;

namespace ForestLife.Maps
{
    public abstract class Map
    {
        protected char[,] mapGrid;

        public abstract void Generate();

        public void Draw()
        {
            Console.WriteLine("---------------");
            int mapHeight = mapGrid.GetLength(0);
            int mapWidth = mapGrid.GetLength(1);

            for (int row = 0; row < mapHeight; row++)
            {
                for (int col = 0; col < mapWidth; col++)
                {
                    Console.Write($"|{mapGrid[row, col]}");
                }
                Console.WriteLine("|");
            }
            Console.WriteLine("---------------");
        }

        protected void LoadTileTypes(string[] tileTypeFiles)
        {
            mapGrid = new char[tileTypeFiles.Length, tileTypeFiles[0].Length];

            for (int row = 0; row < tileTypeFiles.Length; row++)
            {
                string tileTypeFile = tileTypeFiles[row];
                for (int col = 0; col < tileTypeFile.Length; col++)
                {
                    char symbol = tileTypeFile[col];
                    mapGrid[row, col] = symbol;
                }
            }
        }

        protected string[] GetTileTypeFiles(string directoryPath)
        {
            string[] files = Directory.GetFiles(directoryPath, "*.txt");
            return files.Select(File.ReadAllText).ToArray();
        }
    }
}
