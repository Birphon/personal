# src/backend/compiler/error_handler.py

class ErrorHandler:
    def __init__(self):
        self.errors = []

    def add_error(self, error_message, node_id=None):
        # Add an error to the list
        error_info = {"message": error_message, "node_id": node_id}
        self.errors.append(error_info)

    def clear_errors(self):
        # Clear the list of errors
        self.errors = []

    def get_errors(self):
        # Get the list of errors
        return self.errors
