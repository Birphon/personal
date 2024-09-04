import tkinter as tk
from tkinter import scrolledtext
import json
import os

class WeaponDataGUI:
    def __init__(self, master):
        self.master = master
        self.master.title("Weapon Data Input")
        self.master.geometry("500x400")

        self.text_area = scrolledtext.ScrolledText(self.master, wrap=tk.WORD, width=60, height=20)
        self.text_area.pack(padx=10, pady=10)

        self.submit_button = tk.Button(self.master, text="Submit", command=self.submit_data)
        self.submit_button.pack(pady=10)

    def submit_data(self):
        weapon_data = self.parse_weapon_data(self.text_area.get("1.0", tk.END))
        self.save_weapon_data(weapon_data)
        self.master.destroy()

    def parse_weapon_data(self, text):
        # Implement your parsing logic here
        # This is a simplified version
        lines = text.strip().split('\n')
        data = {
            'name': lines[0].strip(),
            'dmg': int(lines[2].split()[0]),
            'fire_rate': int(lines[2].split()[1]),
            'mag': int(lines[2].split()[2]),
            # Add more fields as necessary
        }
        return data

    def save_weapon_data(self, data):
        current_dir = os.path.dirname(os.path.abspath(__file__))
        created_dir = os.path.join(current_dir, 'created')
        os.makedirs(created_dir, exist_ok=True)
        
        file_path = os.path.join(created_dir, 'weapon_data.json')
        
        if os.path.exists(file_path):
            with open(file_path, 'r') as f:
                existing_data = json.load(f)
            existing_data.append(data)
        else:
            existing_data = [data]

        with open(file_path, 'w') as f:
            json.dump(existing_data, f, indent=2)

        print("Weapon data has been saved to 'weapon_data.json'")