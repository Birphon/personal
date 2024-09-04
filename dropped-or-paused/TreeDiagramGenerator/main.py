 
import tkinter as tk

class MainWindow(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Tree Diagram Generator")
        self.geometry("800x600")

        # Create and add widgets to the main window
        self.root_dictionary_frame = tk.Frame(self, width=200, height=600, bg="white")
        self.root_dictionary_frame.pack(side="left", fill="y")

        self.entries_dictionary_frame = tk.Frame(self, width=600, height=200, bg="white")
        self.entries_dictionary_frame.pack(side="top", fill="x")

        self.live_update_frame = tk.Frame(self, width=600, height=400, bg="white")
        self.live_update_frame.pack(side="bottom", fill="both", expand=True)

        # Add any other widgets or components you need

if __name__ == "__main__":
    root = MainWindow()
    root.mainloop()
