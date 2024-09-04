import tkinter as tk
from tkinter import ttk
import pygetwindow as gw
import threading
import time
import pyautogui
timer_running = False


def get_taskbar_applications():
    windows = gw.getWindowsWithTitle('')
    taskbar_apps = [window.title for window in windows if window.title]
    return taskbar_apps


def set_target_application():
    selected_app = app_dropdown.get()
    target_label.config(text=f"Target Application: {selected_app}")


def send_f5_to_selected_app():
    selected_app = app_dropdown.get()
    if selected_app:
        pyautogui.hotkey('alt', 'tab')
        time.sleep(0.5)
        pyautogui.press('f5')


def start_timer():
    global timer_running
    if timer_running:
        return
    timer_running = True

    minutes = int(minutes_input.get()) if minutes_input.get() else 0
    seconds = int(seconds_input.get()) if seconds_input.get() else 0

    total_seconds = minutes * 60 + seconds

    for remaining_time in range(total_seconds, -1, -1):
        if timer_running:
            minutes, seconds = divmod(remaining_time, 60)
            timer_label.config(text=f"{minutes:02d}:{seconds:02d}", font=("Helvetica", 40), fg="red")
            time.sleep(1)
        else:
            break

    if timer_running:
        send_f5_to_selected_app()
        time.sleep(3)
        start_timer()


def stop_timer():
    global timer_running
    timer_running = False
    timer_label.config(text="00:00", font=("Helvetica", 40), fg="red")


def set_target_window():
    selected_app = app_dropdown.get()
    if selected_app:
        windows = gw.getWindowsWithTitle(selected_app)
        if windows:
            window = windows[0]
            window.activate()


def validate_input(P):
    if P.isdigit():
        if 0 <= int(P) <= 59:
            return True
    return False


root = tk.Tk()
root.title("Taskbar Applications")


display_frame = tk.Frame(root, padx=10, pady=10)
display_frame.pack(pady=20)
target_label = tk.Label(display_frame, text="Target Application: None")
target_label.pack()
timer_label = tk.Label(display_frame, text="00:00", font=("Helvetica", 40), fg="red")
timer_label.pack()


app_selector_frame = tk.Frame(root, padx=10, pady=10)
app_selector_frame.pack()
taskbar_applications = get_taskbar_applications()
app_dropdown = tk.StringVar()
app_dropdown.set("Select an application")

if taskbar_applications:
    app_menu = tk.OptionMenu(app_selector_frame, app_dropdown, *taskbar_applications)
    app_menu.pack()
else:
    tk.Label(app_selector_frame, text="No running applications found").pack()
set_target_button = tk.Button(app_selector_frame, text="Set Target Application", command=set_target_application)
set_target_button.pack()


timer_frame = tk.Frame(root, padx=10, pady=10)
timer_frame.pack()
minutes_label = ttk.Label(timer_frame, text="Minutes")
minutes_label.grid(row=0, column=0, padx=5, pady=5)
seconds_label = ttk.Label(timer_frame, text="Seconds")
seconds_label.grid(row=0, column=1, padx=5, pady=5)
minutes_input = ttk.Entry(timer_frame, validate="key")
minutes_input['validatecommand'] = (minutes_input.register(validate_input), '%P')
minutes_input.grid(row=1, column=0, padx=5, pady=5)
seconds_input = ttk.Entry(timer_frame, validate="key")
seconds_input['validatecommand'] = (seconds_input.register(validate_input), '%P')
seconds_input.grid(row=1, column=1, padx=5, pady=5)


timer_button_frame = tk.Frame(root, padx=10, pady=10)
timer_button_frame.pack()
start_button = tk.Button(timer_button_frame, text="Start Timer", command=start_timer)
start_button.grid(row=0, column=0, padx=5, pady=5)
stop_button = tk.Button(timer_button_frame, text="Stop Timer", command=stop_timer)
stop_button.grid(row=0, column=1, padx=5, pady=5)

timer_running = False

root.mainloop()
