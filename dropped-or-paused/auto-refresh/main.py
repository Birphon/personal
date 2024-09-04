import time
import pyautogui
import pygetwindow as gw
from tkinter import Tk, simpledialog, OptionMenu, StringVar

def get_non_empty_windows():
    windows = gw.getWindowsWithTitle('')
    return [window for window in windows if window.title]

def get_selected_window():
    root = Tk()
    root.withdraw()

    # Get a list of non-empty window titles
    non_empty_windows = get_non_empty_windows()
    window_titles = [window.title for window in non_empty_windows]

    if not window_titles:
        print("No windows with non-empty titles found.")
        return None

    # Use OptionMenu to create a dropdown list
    window_title_var = StringVar(root)
    window_title_var.set(window_titles[0])  # Set the default value
    window_menu = OptionMenu(root, window_title_var, *window_titles)
    window_menu.pack()

    # Wait for the user to make a selection
    root.mainloop()

    # Get the selected window by title
    selected_title = window_title_var.get()
    selected_window = next(window for window in non_empty_windows if window.title == selected_title)

    return selected_window

def get_time_input():
    root = Tk()
    root.withdraw()

    # Use simpledialog to get input for Hour, Minute, and Second
    hour = simpledialog.askinteger("Input", "Enter Hour:", minvalue=0)
    minute = simpledialog.askinteger("Input", "Enter Minute:", minvalue=0, maxvalue=59)
    second = simpledialog.askinteger("Input", "Enter Second:", minvalue=0, maxvalue=59)

    # Check if at least one value is filled in
    if hour is not None or minute is not None or second is not None:
        return hour, minute, second
    else:
        return None

def start_timer(window, hours, minutes, seconds):
    total_seconds = hours * 3600 + minutes * 60 + seconds

    while total_seconds > 0:
        time.sleep(1)
        total_seconds -= 1

        if total_seconds == 0:
            # Activate the specified window
            window.activate()
            
            # Send F5 key to the active window
            pyautogui.hotkey('f5')
            print("F5 sent to the window:", window.title)

            # Restart the timer
            total_seconds = hours * 3600 + minutes * 60 + seconds
            print("Timer restarted")

if __name__ == "__main__":
    # Get the selected window
    selected_window = get_selected_window()

    if selected_window:
        # Get the time input from the user
        time_input = get_time_input()

        if time_input:
            hour, minute, second = time_input
            start_timer(selected_window, hour, minute, second)
        else:
            print("Invalid input. Please fill in at least one time value.")
    else:
        print("No window selected.")
