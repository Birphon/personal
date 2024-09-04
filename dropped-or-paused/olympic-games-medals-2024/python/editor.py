import json
from collections import defaultdict

json_file_path = './json/medal_data.json'
edited_file_path = './json/medal_data_by_country.json'

# Load the JSON data
with open(json_file_path, 'r') as file:
    data = json.load(file)

# Reorganize data by country
country_data = defaultdict(lambda: defaultdict(list))

for event in data:
    year, location = event['event'].split('-')
    for medal_info in event['medals']:
        country = medal_info['country']
        country_data[country][year].append({
            'location': location,
            'medals': medal_info['medals']
        })

# Convert defaultdict to a regular dict for JSON serialization
country_data = {country: dict(years) for country, years in country_data.items()}

# Save the reorganized data to a new JSON file
with open(edited_file_path, 'w') as file:
    json.dump(country_data, file, indent=4)

print("Data has been reorganized and saved to medal_data_by_country.json")
