import os
import json
import shutil
import codecs


def clone_and_fix_json_files(folder_path):
    # Create a new folder with "-fixed" appended to the name
    fixed_folder_path = os.path.join(os.path.dirname(
        folder_path), os.path.basename(folder_path) + "-fixed")
    shutil.copytree(folder_path, fixed_folder_path)

    # Iterate through the new folder and fix JSON files
    for root, dirs, files in os.walk(fixed_folder_path):
        for file in files:
            if file.endswith(".json"):
                file_path = os.path.join(root, file)
                fix_json_file(file_path)


def fix_json_file(file_path):
    try:
        # Load the JSON file with the appropriate encoding
        with codecs.open(file_path, "r", encoding="utf-8-sig") as f:
            data = json.load(f)

        # Save the formatted JSON back to the file
        with codecs.open(file_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
            print(f"Fixed JSON file: {file_path}")
    except (json.JSONDecodeError, UnicodeDecodeError) as e:
        print(f"Error: {file_path} is not a valid JSON file ({e})")


if __name__ == "__main__":
    folder_path = input("Enter the folder location: ")
    clone_and_fix_json_files(folder_path)
