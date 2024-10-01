class AttemptController:
    def __init__(self, model, view):
        self.model = model
        self.view = view
        self.view.controller = self
        self.view.new_attempt_button.config(command=self.new_attempt)
        self.view.save_attempt_button.config(command=self.save_attempt)
        self.view.load_attempt_button.config(command=self.load_attempt)
        self.view.rename_attempt_button.config(command=self.rename_attempt)

    def new_attempt(self):
        self.model.new_attempt()
        self.view.show_message("New Attempt", "Started a new attempt. Click on cells to edit values.")

    def save_attempt(self):
        name = self.view.get_attempt_name()
        if name:
            self.model.current_attempt_name = name
            self.model.save_attempt()
            self.view.show_message("Attempt Saved", f"The current attempt has been saved as '{name}'.")

    def update_entry(self, name, value):
        self.model.update_entry(name, value)

    def load_attempt(self):
        attempts = self.model.get_attempts()
        if not attempts:
            self.view.show_message("No Attempts", "No attempts recorded yet.")
            return

        selected_name = self.view.select_attempt(attempts)
        if selected_name:
            self.model.load_attempt(selected_name)
            self.view.show_message("Attempt Loaded", f"Loaded attempt '{selected_name}' for editing.")

    def rename_attempt(self):
        current_name = self.model.get_current_attempt_name()
        if not current_name:
            self.view.show_message("No Attempt", "No attempt is currently loaded.")
            return

        new_name = self.view.get_new_attempt_name(current_name)
        if new_name:
            self.model.rename_attempt(current_name, new_name)
            self.view.show_message("Attempt Renamed", f"Renamed attempt to '{new_name}'.")
