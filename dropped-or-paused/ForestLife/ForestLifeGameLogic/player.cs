using System;
using System.Collections.Generic;

namespace ForestLife.GameLogic
{
    public class Player
    {
        public int X { get; set; }
        public int Y { get; set; }
        public int MaxWeight { get; }
        public int InventoryWeight { get; private set; }
        public List<Item> Inventory { get; }
        public Dictionary<string, Item> EquipmentSlots { get; }

        public Player(int x, int y, int maxWeight)
        {
            X = x;
            Y = y;
            MaxWeight = maxWeight;
            InventoryWeight = 0;
            Inventory = new List<Item>();
            EquipmentSlots = new Dictionary<string, Item>
            {
                ["Head"] = null,
                ["Face"] = null,
                ["Eyes"] = null,
                ["Neck"] = null,
                ["BaseTorso"] = null,
                ["MiddleTorso"] = null,
                ["OuterTorso"] = null,
                ["Hands"] = null,
                ["BaseLeg"] = null,
                ["MiddleLeg"] = null,
                ["OuterLeg"] = null,
                ["Sock"] = null,
                ["Shoe"] = null
            };
        }

        public void Move(int deltaX, int deltaY)
        {
            X += deltaX;
            Y += deltaY;
        }

        public void Draw(Map map)
        {
            map.SetTile(X, Y, '@');
        }

        public void AddItem(Item item)
        {
            Inventory.Add(item);
            InventoryWeight += item.Weight;
        }

        public void RemoveItem(Item item)
        {
            Inventory.Remove(item);
            InventoryWeight -= item.Weight;
        }

        public bool IsInventoryOverweight()
        {
            return InventoryWeight > MaxWeight;
        }

        public void DisplayInventory()
        {
            Console.WriteLine("Player Inventory:");
            Console.WriteLine("----------------------------");
            foreach (var item in Inventory)
            {
                Console.WriteLine($"{item.Name} - Weight: {item.Weight}kg");
            }
            Console.WriteLine("----------------------------");
            Console.WriteLine($"Inventory Weight: {InventoryWeight}kg / Max Weight: {MaxWeight}kg");
        }

        public void EquipItem(Item item, string slot)
        {
            if (EquipmentSlots.ContainsKey(slot))
            {
                Item unequippedItem = EquipmentSlots[slot];
                EquipmentSlots[slot] = item;
                Inventory.Add(unequippedItem);
            }
            else
            {
                EquipmentSlots.Add(slot, item);
                Inventory.Remove(item);
            }
        }

        public void UnequipItem(string slot)
        {
            if (EquipmentSlots.ContainsKey(slot))
            {
                Item item = EquipmentSlots[slot];
                EquipmentSlots[slot] = null;
                Inventory.Add(item);
            }
        }

        public void DisplayEquipmentSlots()
        {
            Console.WriteLine("Equipment Slots:");
            Console.WriteLine("----------------------------");
            foreach (var slot in EquipmentSlots)
            {
                string itemName = slot.Value?.Name ?? "[]";
                Console.WriteLine($"{slot.Key}: {itemName}");
            }
            Console.WriteLine("----------------------------");
        }
    }
}
