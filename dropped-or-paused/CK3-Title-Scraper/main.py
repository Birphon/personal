import os

def extract_titles(file_path):
    # Function to parse title files and extract Duchy, Kingdom, and Empire titles.
    titles = {}

    with open(file_path, 'r', encoding='utf-8') as file:
        current_title = None

        for line in file:
            line = line.strip()

            # Ignore comments and empty lines
            if line.startswith('#') or not line:
                continue

            # Check if it's the start of a new title block
            if line.startswith('title_'):
                current_title = line.split('=')[0].strip()
                titles[current_title] = {'required_land': []}
            
            # Check if it's the required land for the title
            elif line.startswith('de_jure_vassal'):
                required_land = line.split('=')[1].strip()
                titles[current_title]['required_land'].append(required_land)

    return titles


def extract_hidden_titles(file_path):
    hidden_titles = {}

    with open(file_path, 'r', encoding='utf-8') as file:
        current_title = None

        for line in file:
            line = line.strip()

            # Ignore comments and empty lines
            if line.startswith('#') or not line:
                continue

            # Check if it's the start of a new hidden title block
            if line.startswith('hidden_title_'):
                current_title = line.split('=')[0].strip()
                hidden_titles[current_title] = {'required_land': [], 'additional_requirements': []}
            
            # Check if it's the required land for the hidden title
            elif line.startswith('de_jure_vassal'):
                required_land = line.split('=')[1].strip()
                hidden_titles[current_title]['required_land'].append(required_land)

            # Check if it's additional requirements for the hidden title
            elif line.startswith('additional_requirements'):
                requirements = line.split('=')[1].strip()
                hidden_titles[current_title]['additional_requirements'].append(requirements)

    return hidden_titles


def extract_religions(file_path):
    religions = {}

    with open(file_path, 'r', encoding='utf-8') as file:
        current_religion = None

        for line in file:
            line = line.strip()

            # Ignore comments and empty lines
            if line.startswith('#') or not line:
                continue

            # Check if it's the start of a new religion block
            if line.startswith('religion_'):
                current_religion = line.split('=')[0].strip()
                religions[current_religion] = {'group': None}
            
            # Check if it's the group for the religion
            elif line.startswith('group'):
                religion_group = line.split('=')[1].strip()
                religions[current_religion]['group'] = religion_group

    return religions


def extract_hidden_religions(file_path):
    hidden_religions = {}

    with open(file_path, 'r', encoding='utf-8') as file:
        current_religion = None

        for line in file:
            line = line.strip()

            # Ignore comments and empty lines
            if line.startswith('#') or not line:
                continue

            # Check if it's the start of a new hidden religion block
            if line.startswith('hidden_religion_'):
                current_religion = line.split('=')[0].strip()
                hidden_religions[current_religion] = {'group': None, 'additional_requirements': []}
            
            # Check if it's the group for the hidden religion
            elif line.startswith('group'):
                religion_group = line.split('=')[1].strip()
                hidden_religions[current_religion]['group'] = religion_group

            # Check if it's additional requirements for the hidden religion
            elif line.startswith('additional_requirements'):
                requirements = line.split('=')[1].strip()
                hidden_religions[current_religion]['additional_requirements'].append(requirements)

    return hidden_religions


def main():
    ck3_data_directory = "C:\Program Files (x86)\Steam\steamapps\common\Crusader Kings III"  # Replace with the actual path to CK3 data files.

    # Extract Duchy, Kingdom, and Empire Titles
    duchy_titles = extract_titles(os.path.join(ck3_data_directory, "duchy_titles.txt"))
    kingdom_titles = extract_titles(os.path.join(ck3_data_directory, "kingdom_titles.txt"))
    empire_titles = extract_titles(os.path.join(ck3_data_directory, "empire_titles.txt"))

    # Extract Hidden Titles
    hidden_duchy_titles = extract_hidden_titles(os.path.join(ck3_data_directory, "hidden_duchy_titles.txt"))
    hidden_kingdom_titles = extract_hidden_titles(os.path.join(ck3_data_directory, "hidden_kingdom_titles.txt"))
    hidden_empire_titles = extract_hidden_titles(os.path.join(ck3_data_directory, "hidden_empire_titles.txt"))

    # Extract Religions
    religions = extract_religions(os.path.join(ck3_data_directory, "religions.txt"))

    # Extract Hidden Religions
    hidden_religions = extract_hidden_religions(os.path.join(ck3_data_directory, "hidden_religions.txt"))

    # Process and display the extracted information

    # Display Duchy Titles
    print("Duchy Titles:")
    for title, data in duchy_titles.items():
        print(f"{title}: Required Land - {', '.join(data['required_land'])}")

    # Display Kingdom Titles
    print("\nKingdom Titles:")
    for title, data in kingdom_titles.items():
        print(f"{title}: Required Land - {', '.join(data['required_land'])}")

    # Display Empire Titles
    print("\nEmpire Titles:")
    for title, data in empire_titles.items():
        print(f"{title}: Required Land - {', '.join(data['required_land'])}")

    # Display Hidden Duchy Titles
    print("\nHidden Duchy Titles:")
    for title, data in hidden_duchy_titles.items():
        print(f"{title}: Required Land - {', '.join(data['required_land'])}")
        print(f"Additional Requirements: {', '.join(data['additional_requirements'])}")

    # Display Hidden Kingdom Titles
    print("\nHidden Kingdom Titles:")
    for title, data in hidden_kingdom_titles.items():
        print(f"{title}: Required Land - {', '.join(data['required_land'])}")
        print(f"Additional Requirements: {', '.join(data['additional_requirements'])}")

    # Display Hidden Empire Titles
    print("\nHidden Empire Titles:")
    for title, data in hidden_empire_titles.items():
        print(f"{title}: Required Land - {', '.join(data['required_land'])}")
        print(f"Additional Requirements: {', '.join(data['additional_requirements'])}")

    # Display Religions
    print("\nReligions:")
    for religion, data in religions.items():
        print(f"{religion}: Group - {data['group']}")

    # Display Hidden Religions
    print("\nHidden Religions:")
    for religion, data in hidden_religions.items():
        print(f"{religion}: Group - {data['group']}")
        print(f"Additional Requirements: {', '.join(data['additional_requirements'])}")

if __name__ == "__main__":
    main()


if __name__ == "__main__":
    main()
