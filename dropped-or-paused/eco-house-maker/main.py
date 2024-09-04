# main.py
import csv
from professions import professions_dict

def generate_csv(filename):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(['Stage', 'Category', 'Level', 'Items'])

        for stage, categories in professions_dict.items():
            for category, levels in categories.items():
                for level, items in levels.items():
                    if items is not None:
                        for item in items:
                            writer.writerow([stage, category, level, item])

if __name__ == "__main__":
    generate_csv('professions.csv')
