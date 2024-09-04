# main.py
from kivy.app import App
from kivy.uix.button import Button
from src.backend.compiler.code_compiler import CodeCompiler  # Import your CodeCompiler class

class NodeBasedPythonIDE(App):
    def build(self):
        # Create an instance of the CodeCompiler
        code_compiler = CodeCompiler()

        # Example: Compile code when the button is pressed
        def on_button_press(instance):
            node_graph = {}  # Replace with your actual node graph
            compiled_code = code_compiler.compile_code(node_graph)
            print("Compiled Code:")
            print(compiled_code)

        button = Button(text='Compile Code')
        button.bind(on_press=on_button_press)

        return button


if __name__ == '__main__':
    NodeBasedPythonIDE().run()
