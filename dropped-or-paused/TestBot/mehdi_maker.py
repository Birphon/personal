# import csv
import pandas as pd
import openai

openai.api_key = "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"

# Function to interact with ChatGPT and get its response
def get_chatgpt_answer(question):
    response = openai.Completion.create(
        engine='davinci-codex',
        prompt=question,
        max_tokens=50,
        n=1,
        stop=None,
        temperature=0.7
    )
    answer = response.choices[0].text.strip()
    return answer

# Function to interact with ChatGPT and fill missing information
def fill_missing_info(row, headings, questions):
    for i, heading in enumerate(headings):
        question = questions[i].format(row.name)
        answer = input(question)
        row[heading] = answer
    return row

# Load the CSV file
csv_path = 'C:/Users/Bagheera/Documents/Documents 2/VSCode Repo/TestBot/csv/j.csv'

encodings = ['utf-8', 'latin-1', 'windows-1252']
df = None

for encoding in encodings:
    try:
        df = pd.read_csv(csv_path, encoding=encoding)
        break
    except UnicodeDecodeError:
        continue

if df is None:
    raise ValueError("Unable to read the CSV file with any of the specified encodings.")

# List of headings and corresponding questions
headings = ['B', 'C', 'D', 'E', 'F', 'G']
questions = [
    "What does it tell me for {} in Column B: ",
    "Functional Area for {} in Column C: ",
    "Resource (People, Process, Technology, Other) for {} in Column D: ",
    "Governance Domain for {} in Column E: ",
    "Governance Value for {} in Column F: ",
    "Threat Factor for {} in Column G: "
]

# Iterate over each row and fill missing information
for index, row in df.iterrows():
    if pd.isnull(row['B']):
        filled_row = fill_missing_info(row, headings, questions)
        df.loc[index] = filled_row.values

# Save the updated DataFrame back to CSV
updated_csv_path = 'C:/Users/Bagheera/Documents/Documents 2/VSCode Repo/TestBot/csv/updated_csv_2.csv'
df.to_csv(updated_csv_path, index=False)