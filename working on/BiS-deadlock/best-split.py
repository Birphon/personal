import itertools

# Items from each category
gun_items = [
    {"name": "[Gun] Escalating Resilience", "resistance": 0.40, "active": False},
    {"name": "[Gun] Warp Stone - ACTIVE", "resistance": 0.30, "active": True},
    {"name": "[Gun] Point Blank", "resistance": 0.15, "active": False},
    {"name": "[Gun] Titanic Magazine", "resistance": 0.15, "active": False}
]

vit_items = [
    {"name": "[Vit] Phantom Strike - ACTIVE", "resistance": 0.50, "active": True},
    {"name": "[Vit] Improved Bullet Armor", "resistance": 0.40, "active": False},
    {"name": "[Vit] Improved Spirit Armor", "resistance": 0.45, "active": False},
    {"name": "[Vit] Colossus - ACTIVE", "resistance": 0.40, "active": True}
]

spi_items = [
    {"name": "[Spi] Echo Shard - ACTIVE", "resistance": 0.16, "active": True},
    {"name": "[Spi] Mystic Reverb", "resistance": 0.15, "active": False},
    {"name": "[Spi] Cold Front - ACTIVE", "resistance": 0.10, "active": True},
    {"name": "[Spi] Refresher - ACTIVE", "resistance": 0.08, "active": True}
]


# Calculate the total resistance based on selected items
def calculate_resistance(items):
    resistance = 1
    for item in items:
        resistance *= (1 - item["resistance"])
    return 1 - resistance


# Find the best combination of items
def find_best_combination():
    max_resistance = 0
    best_combination = []

    # Generate all possible combinations within the constraints
    for gun_combo in itertools.combinations(gun_items, 4):
        for vit_combo in itertools.combinations(vit_items, 4):
            for spi_combo in itertools.combinations(spi_items, 4):

                # Combine all selected items
                combined_items = list(gun_combo) + list(vit_combo) + list(spi_combo)

                # Check for the limit of 4 ACTIVE items
                active_count = sum(1 for item in combined_items if item["active"])
                if active_count <= 4:
                    # Calculate the total resistance for this combination
                    total_resistance = calculate_resistance(combined_items)
                    if total_resistance > max_resistance:
                        max_resistance = total_resistance
                        best_combination = combined_items

    return max_resistance * 100, best_combination


# Run the script
best_resistance, best_combination = find_best_combination()

# Print the results
print(f"Best Mixed Resistance: {best_resistance:.2f}%")
print("Best Combination of Items:")
for item in best_combination:
    print(f"- {item['name']} (ACTIVE: {item['active']})")
