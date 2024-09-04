import json
import random

# List of JSON files to process
json_files = [
    'json_files/clerical_doctrines.json',
    'json_files/crime.json',
    'json_files/main_doctrines.json',
    'json_files/marriage.json',
    'json_files/tenets.json'
]

# Load settings from settings.json
with open('settings.json', 'r') as settings_file:
    all_settings = json.load(settings_file)

# Function to randomize and print items from an array
def randomize_and_print(array_name, times, data):
    if array_name not in data:
        print(f"Array '{array_name}' not found in the JSON file.")
        return

    print(f"Randomized '{array_name}' {times} times:")
    for _ in range(times):
        array = data[array_name]
        randomized_item = random.choice(array)
        print(randomized_item)

# Iterate through JSON files
for json_file in json_files:
    # Load data from the current JSON file
    with open(json_file, 'r') as data_file:
        data = json.load(data_file)

    # Get settings for the current JSON file
    settings = all_settings.get(json_file, {})

    # Iterate through settings and call randomize_and_print for each array or item
    for array_name, times in settings.items():
        randomize_and_print(array_name, times, data)
