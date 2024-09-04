import PySimpleGUI as sg
import json

def load_config():
    try:
        with open('menu_config.json', 'r') as file:
            config_data = json.load(file)
        return config_data
    except FileNotFoundError:
        sg.popup_error("Configuration file not found. Run discord_menu.py first.")
        exit()

def save_config(config_data):
    with open('menu_config.json', 'w') as file:
        json.dump(config_data, file, indent=4)

def input_menu():
    sg.theme('LightBlue2')
    config_data = load_config()

    layout = [
        [sg.Text("Input Menu")],
    ]

    for key, value in config_data.items():
        if isinstance(value, dict):
            for sub_key, sub_value in value.items():
                layout.append([sg.Text(f"Enter {sub_key}:"),
                            sg.InputText(default_text=sub_value, key=f'{sub_key}')])
        else:
            layout.append([sg.Text(f"Enter {key}:"),
                        sg.InputText(default_text=value, key=key)])

    layout.append([sg.Button("Save"), sg.Button("Cancel")])

    window = sg.Window("Input Menu", layout)

    while True:
        event, values = window.read()

        if event == sg.WINDOW_CLOSED or event == "Cancel":
            break

        if event == "Save":
            for key, value in values.items():
                if key in config_data:
                    config_data[key] = value

            save_config(config_data)
            sg.popup("Configuration saved successfully!")
            window.close()
