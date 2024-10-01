import tkinter as tk
from model import AttemptModel
from view import AttemptView
from controller import AttemptController


def main():
    root = tk.Tk()
    root.geometry("800x600")  # Set initial window size
    model = AttemptModel()
    view = AttemptView(root)
    controller = AttemptController(model, view)

    model.attach(view)

    root.mainloop()


if __name__ == "__main__":
    main()