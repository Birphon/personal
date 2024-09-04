import csv
from itertools import combinations

# List of Tarot cards
tarot_cards = [
    "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
    "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
    "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
    "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
    "Judgement", "The World"
]

# Generate all 3-card combinations
card_combinations = list(combinations(tarot_cards, 3))

# Create and write to CSV file
with open('tarot_combinations.csv', 'w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    writer.writerow(["Card 1", "Card 2", "Card 3"])  # Header row
    writer.writerows(card_combinations)

print(f"CSV file 'tarot_combinations.csv' has been created with {len(card_combinations)} combinations.")