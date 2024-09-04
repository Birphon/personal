from collections import defaultdict
from operator import itemgetter

# Define the items with their attributes
deco = [
    {"name": "Limestone Otter Statue", "category": "Decoration", "subcategory": "Statue", "dim_return": 0.60, "value": 0.2},
    {"name": "Limestone Owl Statue", "category": "Decoration", "subcategory": "Statue", "dim_return": 0.60, "value": 0.2},
    {"name": "Limestone Wolf Statue", "category": "Decoration", "subcategory": "Statue", "dim_return": 0.50, "value": 0.5},
    {"name": "Rug Large", "category": "Decoration", "subcategory": "Rug", "dim_return": 0.50, "value": 2},
    {"name": "Rug Medium", "category": "Decoration", "subcategory": "Rug", "dim_return": 0.50, "value": 1}
]

def calculate_item_value(item_counts):
    subcategories = defaultdict(list)
    for item_name, count in item_counts.items():
        for item in deco:
            if item["name"] == item_name:
                subcategories[item["subcategory"]].append((item["value"], item["dim_return"], count))

    total_value = 0
    for subcategory_items in subcategories.values():
        subcategory_items.sort(key=itemgetter(0, 1), reverse=True) # Sort by value, high to low, then by alphabetical
        prev_value = 0
        subcategory_total = 0
        for value, dim_return, count in subcategory_items:
            item_math_equation = ""
            listName = ""
            for _ in range(count):
                subcategory_total += round(value + sum(prev_value * (1 - dim_return) for _ in range(count)), 2)
                prev_value = value
                item_math_equation += f"{value:.2f} + "
                listName = item_name
                value *= (1 - dim_return)
            print(f"{count} {listName}: {item_math_equation[:-3]}")
        total_value += subcategory_total
    return round(total_value, 2)

def main():
    item_counts = {}
    while True:
        item_name = input("Enter item name (or 'done' to finish): ")
        if item_name.lower() == 'done':
            break
        count = int(input("Enter quantity: "))
        item_counts[item_name] = count

    item_math = []
    for item_name, count in item_counts.items():
        item_math.append(f"{count} {item_name}")
    item_math_equation = " + ".join(item_math)

    item_total = calculate_item_value(item_counts)
    
    print(f"Item Math: {item_math_equation}")
    print(f"Item Total: {item_total}")

if __name__ == "__main__":
    main()
