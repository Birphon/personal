import tkinter as tk
import os
from weapon_data_gui import WeaponDataGUI
from armor_data_gui import ArmorDataGUI
from editor_gui import EditorGUI

class MainApp:
    def __init__(self, master):
        self.master = master
        self.master.title("Data Management System")
        self.master.geometry("300x200")

        btn_weapon = tk.Button(self.master, text="Weapon Data", command=self.open_weapon_data)
        btn_weapon.pack(pady=10)

        btn_armor = tk.Button(self.master, text="Armor Data", command=self.open_armor_data)
        btn_armor.pack(pady=10)

        btn_editor = tk.Button(self.master, text="Editor", command=self.open_editor)
        btn_editor.pack(pady=10)

    def open_weapon_data(self):
        self.new_window(WeaponDataGUI)

    def open_armor_data(self):
        self.new_window(ArmorDataGUI)

    def open_editor(self):
        self.new_window(EditorGUI)

    def new_window(self, _class):
        self.new = tk.Toplevel(self.master)
        _class(self.new)

if __name__ == "__main__":
    root = tk.Tk()
    app = MainApp(root)
    root.mainloop()