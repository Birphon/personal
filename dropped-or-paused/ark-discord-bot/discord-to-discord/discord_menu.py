import PySimpleGUI as sg
import json

def discord_menu():
    sg.theme('LightBlue2')

    def save_config(config_data):
        with open('menu_config.json', 'w') as file:
            json.dump(config_data, file, indent=4)

    layout = [
        [sg.Text("Discord Server Configuration")],
        [sg.Text("Enter the main channel ID:")],
        [sg.InputText(key='main_channel_id')],
        [sg.Text("How many threads do you have?"), sg.InputText(key='num_threads')],
        [sg.Text("How many roles do you have?"), sg.InputText(key='num_roles')],
        [sg.Text("Enter thread names (comma-separated):")],
        [sg.InputText(key='thread_names')],
        [sg.Text("Enter role names (comma-separated):")],
        [sg.InputText(key='role_names')],
        [sg.Button("Save"), sg.Button("Cancel")]
    ]

    window = sg.Window("Discord Server Configuration", layout)

    while True:
        event, values = window.read()

        if event == sg.WINDOW_CLOSED or event == "Cancel":
            window.close()

        if event == "Save":
            main_channel_id = values['main_channel_id']
            num_threads = int(values['num_threads'])
            num_roles = int(values['num_roles'])
            thread_names = values['thread_names'].split(',')
            role_names = values['role_names'].split()

            config_data = {
                "main_channel_id": main_channel_id,
                "target_threads": {f"thread-{i + 1}-id": "" for i in range(num_threads)},
                "target_roles": {f"role-{i + 1}-id": "" for i in range(num_roles)}
            }

            for i, thread_name in enumerate(thread_names):
                config_data['target_threads'][f"thread-{i + 1}-id"] = thread_name.strip()

            for i, role_name in enumerate(role_names):
                config_data['target_roles'][f"role-{i + 1}-id"] = role_name.strip()

            save_config(config_data)
            sg.popup("Configuration saved successfully!")
            window.close()
