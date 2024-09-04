import csv

# Read the CSV file and populate a list with names
with open('./csv/kids.csv', 'r') as file:
    reader = csv.reader(file)
    names = [row[0] for row in reader]

# Create a dictionary to store the count of each name
name_count = {}

# Iterate through the list of names and update the count for each name
for i, name in enumerate(names):
    if name in name_count:
        name_count[name] += 1
        names[i] = f"{name}{name_count[name]}"
    else:
        name_count[name] = 2
        names[i] = f"{name}1"

# Write the updated names back to the CSV file
with open('updated_names.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    for name in names:
        writer.writerow([name])
