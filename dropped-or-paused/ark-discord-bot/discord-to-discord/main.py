import json
import os
import bot
import input_menu
import discord_menu
import q_menu
import PySimpleGUI as sg

result = ""

def check_previous_data():
    # Check if config.json exists
    if os.path.exists('menu_config.json'):
        with open('menu_config.json', 'r') as file:
            config_data = json.load(file)

        # Check if necessary keys are present in config_data
        if 'main_channel_id' in config_data and 'target_threads' in config_data:
            return True
    return False

def q_menu():
    sg.theme('LightBlue2')

    layout = [
        [sg.Text("Do you want to use previous configuration data?")],
        [sg.Button("Yes"), sg.Button("No")]
    ]

    window = sg.Window('Question Menu', layout)

    while True:
        event, values = window.read()

        if event == sg.WINDOW_CLOSED:
            break
        elif event == 'Yes':
            result = "Yes"
            break
        elif event == 'No':
            result = "No"
            break

    window.close()
    return result

if __name__ == "__main__":
    # Check if there is previous data
    if check_previous_data():
        # If there is previous data, load q_menu
        result = q_menu()
        if result == "Yes":
            bot.run_bot()
        else:
            # If there is no previous data, load discord_menu
            discord_menu.discord_menu()
            # After discord_menu, load input_menu
            input_menu.input_menu()
            bot.run_bot()
