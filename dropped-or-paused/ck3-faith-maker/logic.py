import json
import random

# Function to check if two items are compatible
def are_items_compatible(item1, item2):
    # Define your compatibility rules here
    # For example, if item1 and item2 are not equal, they are not compatible
    return item1 == item2

# Function to resolve conflicts and update the conflict.json file
def resolve_conflicts(data, conflicts):
    for conflict_name, conflict_items in conflicts.items():
        item1_name, item2_name = conflict_items

        item1 = data.get(item1_name)
        item2 = data.get(item2_name)

        if item1 is None or item2 is None:
            continue

        # Check if the items are compatible
        if not are_items_compatible(item1, item2):
            # Determine which item to reroll (1 or 2)
            reroll_item = random.randint(1, 2)
            if reroll_item == 1:
                data[item1_name] = random.choice(item1)
            else:
                data[item2_name] = random.choice(item2)

# Load data from the main.json file
with open('main.json', 'r') as main_file:
    data = json.load(main_file)

# Load conflicts from conflict.json file (create it if it doesn't exist)
try:
    with open('conflict.json', 'r') as conflict_file:
        conflicts = json.load(conflict_file)
except FileNotFoundError:
    conflicts = {}

# Resolve conflicts
resolve_conflicts(data, conflicts)

# Save the updated data and conflicts back to their respective files
with open('main.json', 'w') as main_file:
    json.dump(data, main_file, indent=4)

with open('conflict.json', 'w') as conflict_file:
    json.dump(conflicts, conflict_file, indent=4)
