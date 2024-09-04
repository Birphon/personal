import tkinter as tk
from tkinter import filedialog, scrolledtext
import json
import os

class EditorGUI:
    def __init__(self, master):
        self.master = master
        self.master.title("JSON Editor")
        self.master.geometry("500x400")

        self.select_button = tk.Button(self.master, text="Select JSON File", command=self.select_file)
        self.select_button.pack(pady=10)

        self.text_area = scrolledtext.ScrolledText(self.master, wrap=tk.WORD, width=60, height=20)
        self.text_area.pack(padx=10, pady=10)

        self.submit_button = tk.Button(self.master, text="Submit", command=self.submit_data)
        self.submit_button.pack(pady=10)

        self.file_path = None

    def select_file(self):
        current_dir = os.path.dirname(os.path.abspath(__file__))
        created_dir = os.path.join(current_dir, 'created')
        self.file_path = filedialog.askopenfilename(initialdir=created_dir, filetypes=[("JSON files", "*.json")])
        if self.file_path:
            with open(self.file_path, 'r') as f:
                data = json.load(f)
            self.text_area.delete('1.0', tk.END)
            self.text_area.insert(tk.END, json.dumps(data, indent=2))

    def submit_data(self):
        if self.file_path:
            try:
                data = json.loads(self.text_area.get("1.0", tk.END))
                with open(self.file_path, 'w') as f:
                    json.dump(data, f, indent=2)
                print(f"Data has been saved to {self.file_path}")
            except json.JSONDecodeError:
                print("Invalid JSON format. Please check your input.")
        self.master.destroy()