import json
import os
from datetime import datetime
from typing import List, Dict, Tuple
from observer import Subject

class AttemptModel(Subject):
    def __init__(self):
        super().__init__()
        self.attempts: Dict[str, Dict[str, str]] = {}
        self.current_attempt: Dict[str, str] = {}
        self.current_attempt_name: str = ""
        self.default_names = [
            "Move Forward", "Move Backward", "Move Left (strafe)", "Move Right (strafe)",
            "Jump", "Dash", "Crouch/Slide", "Item 1", "Item 2", "Item 3", "Item 4",
            "Melee", "Ability 1", "Ability 2", "Ability 3", "Ability 4",
            "Level Ability 1", "Level Ability 2", "Level Ability 3", "Level Ability 4",
            "Parry", "Cancel Ability", "Fire", "Zoom", "Extra Info", "Open Shop",
            "Scoreboard", "Reload"
        ]
        self.load_attempts()

    def new_attempt(self):
        self.current_attempt = {name: "" for name in self.default_names}
        self.current_attempt_name = f"Attempt_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
        self._notify()

    def update_entry(self, name: str, value: str):
        self.current_attempt[name] = value
        self._notify()

    def save_attempt(self):
        self.attempts[self.current_attempt_name] = self.current_attempt.copy()
        self._save_to_file()
        self._notify()

    def load_attempt(self, name: str):
        if name in self.attempts:
            self.current_attempt = self.attempts[name].copy()
            self.current_attempt_name = f"{name}-edit"
            self._notify()

    def rename_attempt(self, old_name: str, new_name: str):
        if old_name in self.attempts:
            self.attempts[new_name] = self.attempts.pop(old_name)
            if self.current_attempt_name == old_name:
                self.current_attempt_name = new_name
            self._save_to_file()
            self._notify()

    def _save_to_file(self):
        with open("attempts.json", "w") as f:
            json.dump(self.attempts, f)

    def load_attempts(self):
        if os.path.exists("attempts.json"):
            with open("attempts.json", "r") as f:
                self.attempts = json.load(f)

    def get_attempts(self) -> Dict[str, Dict[str, str]]:
        return self.attempts

    def get_current_attempt(self) -> Dict[str, str]:
        return self.current_attempt

    def get_current_attempt_name(self) -> str:
        return self.current_attempt_name