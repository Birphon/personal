import openai
import random

# Set your OpenAI GPT-3 API key here
openai.api_key = 'YOUR_API_KEY'

# Project templates
projects = {
    'Python': {
        'Beginner': {
            'Base Code': True,
            'Title': 'Simple Python Project',
            'Requirements': 'Python 3.x',
            'Goals': 'Learn basic syntax and concepts',
            'Learnings': 'Variables, loops, and functions'
        },
        'Intermediate': {
            'Base Code': True,
            'Title': 'Intermediate Python Project',
            'Requirements': 'Python 3.x, additional libraries',
            'Goals': 'Build a more complex application',
            'Learnings': 'Advanced concepts and best practices'
        },
        'Advanced': {
            'Base Code': False,
            'Title': 'Advanced Python Project',
            'Requirements': 'Python 3.x, specialized libraries',
            'Goals': 'Solve a real-world problem',
            'Learnings': 'Advanced algorithms and design patterns'
        }
    },
    # Add more languages and skill levels as needed
}

def generate_project(language, skill_level, base_code):
    if language in projects and skill_level in projects[language]:
        project_info = projects[language][skill_level]
        if not base_code:
            del project_info['Base Code']
        return project_info
    else:
        return None

def get_base_code_msg(base_code):
    return "providing a base code" if base_code else "without giving me code"

def chat_with_gpt(prompt):
    response = openai.Completion.create(
        engine="text-davinci-003",  # You can choose a different engine
        prompt=prompt,
        temperature=0.7,
        max_tokens=150,
        n=1,
    )
    return response.choices[0].text.strip()

def display_project(project, language, skill_level, base_code):
    if project:
        base_code_msg = get_base_code_msg(base_code)
        message = f"I am a {skill_level} at {language}. {base_code_msg}, give me a project to make\n\n" \
                  f"- goals\n  {project['Goals']}\n" \
                  f"- requirements\n  {project['Requirements']}\n" \
                  f"- learnings\n  {project['Learnings']}"
        print(message)

        # Chat with GPT to get more information or suggestions
        gpt_prompt = f"Generate more ideas for a {skill_level} {language} project"
        gpt_response = chat_with_gpt(gpt_prompt)
        print("\nChatGPT suggestion:\n", gpt_response)
    else:
        print("Invalid input. Please check the language and skill level.")

def main():
    while True:
        language = input("Enter Coding Language (e.g., Python): ").capitalize()
        skill_level = input("Enter Skill Level (Beginner/Intermediate/Advanced): ").capitalize()
        base_code = input("Base Code? (yes/no): ").lower() == 'yes'

        project = generate_project(language, skill_level, base_code)
        display_project(project, language, skill_level, base_code)

        user_input = input("Do you want to generate another project? (yes/no): ").lower()
        if user_input != 'yes':
            break

if __name__ == "__main__":
    main()
