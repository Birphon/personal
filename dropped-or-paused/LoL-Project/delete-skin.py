import os
import json
import codecs


def process_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            if file.endswith(".json"):
                file_path = os.path.join(root, file)
                process_json_file(file_path)


def process_json_file(file_path):
    try:
        with codecs.open(file_path, "r", encoding="utf-8-sig") as f:
            data = json.load(f)

        clean_data(data)

        with codecs.open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
            print(f"Processed JSON file: {file_path}")
    except (json.JSONDecodeError, UnicodeDecodeError) as e:
        print(f"Error: {file_path} is not a valid JSON file ({e})")


def clean_data(data):
    if isinstance(data, dict):
        keys_to_remove = ["image", "skins", "lore",
                          "blurb", "allytips", "enemytips"]
        for key in keys_to_remove:
            data.pop(key, None)

        if "spells" in data:
            for spell in data["spells"]:
                spell.pop("effect", None)

        for value in data.values():
            clean_data(value)
    elif isinstance(data, list):
        for item in data:
            clean_data(item)


if __name__ == "__main__":
    folder_path = input("Enter the folder location: ")
    process_folder(folder_path)
