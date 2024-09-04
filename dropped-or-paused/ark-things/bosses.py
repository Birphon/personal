import tkinter as tk
from tkinter import ttk

data = {
    "Broodmother": {
        "Gamma": 20,
        "Beta": 56,
        "Alpha": 148
    },
    "Megapithecus": {
        "Gamma": 40,
        "Beta": 110,
        "Alpha": 220
    },
    "Dragon": {
        "Gamma": 40,
        "Beta": 110,
        "Alpha": 220
    }
}

items = {
    "Broodmother": {
        "Gamma": ["Tek Foundation", "Tek Replicator", "Tek Triangle Ceiling", "Tek Triangle Foundation", "Tek Triangle Roof"],
        "Beta": ["Sloped Tek Roof", "Sloped Tek Wall Left", "Sloped Tek Wall Right", "Tek Boots", "Tek Catwalk", "Tek Ceiling",
                 "Tek Fence Foundation", "Tek Foundation", "Tek Ladder", "Tek Pillar", "Tek Railing", "Tek Ramp",
                 "Tek Replicator", "Tek Staircase", "Tek Triangle Ceiling", "Tek Triangle Foundation", "Tek Triangle Roof",
                 "Tek Wall"],
        "Alpha": ["Mosasaur Tek Saddle", "Sloped Tek Roof", "Sloped Tek Wall Left", "Sloped Tek Wall Right", "Tek Boots",
                  "Tek Catwalk", "Tek Ceiling", "Tek Fence Foundation", "Tek Foundation", "Tek Helmet", "Tek Ladder",
                  "Tek Pillar", "Tek Railing", "Tek Ramp", "Tek Replicator", "Tek Staircase", "Tek Triangle Ceiling",
                  "Tek Triangle Foundation", "Tek Triangle Roof", "Tek Turret", "Tek Wall"]
    },
    "Megapithecus": {
        "Gamma": ["Tek Gauntlets", "Tek Hatchframe", "Tek Replicator", "Tek Trapdoor", "Tek Window", "Tek Windowframe"],
        "Beta": ["Tek Dinosaur Gate", "Tek Dinosaur Gateway", "Tek Door", "Tek Doorframe", "Tek Gauntlets", "Tek Generator",
                 "Tek Hatchframe", "Tek Replicator", "Tek Rifle", "Tek Trapdoor", "Tek Trough", "Tek Window"],
        "Alpha": ["Large Tek Wall", "Rex Tek Saddle", "Tek Dinosaur Gate", "Tek Dinosaur Gateway", "Tek Door", "Tek Doorframe",
                  "Tek Gauntlets", "Tek Generator", "Tek Grenade", "Tek Hatchframe", "Tek Replicator", "Tek Rifle",
                  "Tek Trapdoor", "Tek Trough", "Tek Window", "Tek Windowframe"]
    },
    "Dragon": {
        "Gamma": ["Behemoth Tek Gate", "Behemoth Tek Gateway", "Megalodon Tek Saddle", "Tapejara Tek Saddle", "Tek Leggings", "Tek Replicator"],
        "Beta": ["Behemoth Tek Gate", "Behemoth Tek Gateway", "Megalodon Tek Saddle", "Tapejara Tek Saddle", "Tek Dedicated Storage",
                 "Tek Double Door", "Tek Double Doorframe", "Tek Fence Support", "Tek Forcefield", "Tek Leggings", "Tek Replicator",
                 "Tek Stairs", "Tek Transmitter", "Vacuum Compartment"],
        "Alpha": ["Vacuum Compartment", "Behemoth Tek Gate", "Behemoth Tek Gateway", "Cloning Chamber", "Megalodon Tek Saddle",
                  "Tapejara Tek Saddle", "Tek Chestpiece", "Tek Dedicated Storage", "Tek Double Door", "Tek Double Doorframe",
                  "Tek Fence Support", "Tek Forcefield", "Tek Leggings", "Tek Replicator", "Tek Stairs", "Tek Teleporter",
                  "Tek Transmitter", "Vacuum Compartment", "Vacuum Compartment Moonpool"]
    }
}

def display_data():
    for boss, levels in data.items():
        print(f"{boss}:")
        for level, count in levels.items():
            print(f"\t{level} - {count} items:")
            for item in items[boss][level]:
                print(f"\t\t{item}")
            print()

# Uncomment the following lines if you want to display the data in the console
# display_data()

# Tkinter GUI
root = tk.Tk()
root.title("Tek Tier Items")

# Create a Treeview widget
tree = ttk.Treeview(root, columns=("Level", "Count", "Items"), show="headings")
tree.heading("Level", text="Level")
tree.heading("Count", text="Count")
tree.heading("Items", text="Items")

# Insert data into the tree
for boss, levels in data.items():
    for level, count in levels.items():
        items_list = "\n".join(items[boss][level])
        tree.insert("", "end", values=(boss, level, count, items_list))

# Pack the tree into the window
tree.pack(expand=tk.YES, fill=tk.BOTH)

root.mainloop()
