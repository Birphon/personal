 
class FileManager:
    @staticmethod
    def load(filename):
        try:
            with open(filename, "r") as file:
                # Read the contents of the file and return it
                return file.read()
        except FileNotFoundError:
            print(f"File {filename} not found.")

    @staticmethod
    def save(filename, content):
        try:
            with open(filename, "w") as file:
                # Write the content to the file
                file.write(content)
                print(f"File {filename} saved.")
        except Exception as e:
            print(f"Error occurred while saving file {filename}: {str(e)}")
