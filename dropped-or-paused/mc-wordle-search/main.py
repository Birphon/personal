import json

def load_words():
    with open('words.json', 'r') as file:
        words_data = json.load(file)
    return words_data

def search_words(input_word, words_data):
    matching_words = [word for word in words_data if input_word.lower() in word.lower()]
    return matching_words

def main():
    words_data = load_words()

    while True:
        user_input = input("Enter a word (1-4 letters): ")
        if 1 <= len(user_input) <= 4:
            matching_words = search_words(user_input, words_data)
            print("Matching words:", matching_words)
        else:
            print("Invalid input. Please enter a word with 1 to 4 letters.")

if __name__ == "__main__":
    main()
