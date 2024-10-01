import tkinter as tk
from tkinter import ttk, messagebox, simpledialog
from observer import Observer


class AttemptView(Observer):
    def __init__(self, master):
        self.master = master
        self.master.title("Attempt Recorder")
        self.create_widgets()
        self.current_edit = None

    def create_widgets(self):
        self.main_frame = ttk.Frame(self.master, padding="10")
        self.main_frame.grid(row=0, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))
        self.master.columnconfigure(0, weight=1)
        self.master.rowconfigure(0, weight=1)

        self.create_buttons()
        self.create_treeviews()

    def create_buttons(self):
        button_frame = ttk.Frame(self.main_frame)
        button_frame.grid(row=0, column=0, columnspan=2, pady=10, sticky=(tk.W, tk.E))

        self.new_attempt_button = ttk.Button(button_frame, text="New Attempt")
        self.new_attempt_button.pack(side=tk.LEFT, padx=5)

        self.save_attempt_button = ttk.Button(button_frame, text="Save Attempt")
        self.save_attempt_button.pack(side=tk.LEFT, padx=5)

        self.load_attempt_button = ttk.Button(button_frame, text="Load Attempt")
        self.load_attempt_button.pack(side=tk.LEFT, padx=5)

        self.rename_attempt_button = ttk.Button(button_frame, text="Rename Attempt")
        self.rename_attempt_button.pack(side=tk.LEFT, padx=5)

    def create_treeviews(self):
        # Current attempt treeview
        self.tree = ttk.Treeview(self.main_frame, columns=('Name', 'Value'), show='headings')
        self.tree.heading('Name', text='Name')
        self.tree.heading('Value', text='Value')
        self.tree.grid(row=1, column=0, sticky=(tk.W, tk.E, tk.N, tk.S))

        self.tree_scroll = ttk.Scrollbar(self.main_frame, orient=tk.VERTICAL, command=self.tree.yview)
        self.tree_scroll.grid(row=1, column=1, sticky=(tk.N, tk.S))
        self.tree.configure(yscrollcommand=self.tree_scroll.set)

        # Last attempt treeview
        self.last_attempt_tree = ttk.Treeview(self.main_frame, columns=('Name', 'Value'), show='headings')
        self.last_attempt_tree.heading('Name', text='Name')
        self.last_attempt_tree.heading('Value', text='Value')
        self.last_attempt_tree.grid(row=1, column=2, sticky=(tk.W, tk.E, tk.N, tk.S))

        self.last_attempt_scroll = ttk.Scrollbar(self.main_frame, orient=tk.VERTICAL,
                                                 command=self.last_attempt_tree.yview)
        self.last_attempt_scroll.grid(row=1, column=3, sticky=(tk.N, tk.S))
        self.last_attempt_tree.configure(yscrollcommand=self.last_attempt_scroll.set)

        self.main_frame.columnconfigure(0, weight=1)
        self.main_frame.columnconfigure(2, weight=1)
        self.main_frame.rowconfigure(1, weight=1)

        self.tree.bind('<ButtonRelease-1>', self.on_click)
        self.tree.bind('<KeyPress>', self.on_key_press)

    def on_click(self, event):
        region = self.tree.identify("region", event.x, event.y)
        if region == "cell":
            column = self.tree.identify_column(event.x)
            if column == '#2':  # Value column
                item = self.tree.identify_row(event.y)
                self.edit_cell(item, column)

    def on_key_press(self, event):
        if event.keysym in ('Up', 'Down') and self.current_edit:
            self.finish_editing(*self.current_edit)
            selection = self.tree.selection()
            if selection:
                item = selection[0]
                if event.keysym == 'Up':
                    prev_item = self.tree.prev(item)
                    if prev_item:
                        self.tree.selection_set(prev_item)
                        self.edit_cell(prev_item, '#2')
                elif event.keysym == 'Down':
                    next_item = self.tree.next(item)
                    if next_item:
                        self.tree.selection_set(next_item)
                        self.edit_cell(next_item, '#2')

    def edit_cell(self, item, column):
        if self.current_edit:
            self.finish_editing(*self.current_edit)

        x, y, width, height = self.tree.bbox(item, column)

        entry = ttk.Entry(self.tree, width=width // 8)
        entry.editing_item = item
        entry.editing_column = column
        entry.insert(0, self.tree.item(item, 'values')[1])
        entry.select_range(0, tk.END)
        entry.focus()
        entry.bind('<FocusOut>', lambda e: self.finish_editing(entry, item, column))
        entry.bind('<Return>', lambda e: self.move_to_next_cell(entry, item, column))

        entry.place(x=x, y=y, width=width, height=height)
        self.current_edit = (entry, item, column)

    def finish_editing(self, widget, item, column):
        if self.current_edit and self.current_edit[0] == widget:
            new_value = widget.get()
            self.tree.set(item, column=column, value=new_value)
            widget.destroy()
            self.update_model(item, new_value)
            self.current_edit = None

    def move_to_next_cell(self, widget, item, column):
        self.finish_editing(widget, item, column)
        next_item = self.tree.next(item)
        if next_item:
            self.tree.selection_set(next_item)
            self.edit_cell(next_item, column)

    def update_model(self, item, new_value):
        name = self.tree.item(item, 'values')[0]
        if hasattr(self, 'controller'):
            self.controller.update_entry(name, new_value)

    def update(self, subject):
        self.display_current_attempt(subject.get_current_attempt())
        self.display_last_attempt(subject.get_attempts())

    def display_current_attempt(self, attempt):
        self.tree.delete(*self.tree.get_children())
        for name, value in attempt.items():
            self.tree.insert('', 'end', values=(name, value))

    def display_last_attempt(self, attempts):
        self.last_attempt_tree.delete(*self.last_attempt_tree.get_children())
        if attempts:
            last_attempt = list(attempts.values())[-1]
            for name, value in last_attempt.items():
                self.last_attempt_tree.insert('', 'end', values=(name, value))

    def show_message(self, title, message):
        messagebox.showinfo(title, message)

    def get_attempt_name(self):
        return simpledialog.askstring("Attempt Name", "Enter a name for this attempt:")

    def get_new_attempt_name(self, old_name):
        return simpledialog.askstring("Rename Attempt", f"Enter a new name for '{old_name}':")

    def select_attempt(self, attempts):
        select_window = tk.Toplevel(self.master)
        select_window.title("Select Attempt")

        listbox = tk.Listbox(select_window, width=50)
        listbox.pack(padx=10, pady=10)

        for name in attempts.keys():
            listbox.insert(tk.END, name)

        selected_name = [None]

        def on_select():
            selection = listbox.curselection()
            if selection:
                selected_name[0] = listbox.get(selection[0])
                select_window.destroy()

        ttk.Button(select_window, text="Select", command=on_select).pack(pady=5)
        select_window.wait_window()
        return selected_name[0]