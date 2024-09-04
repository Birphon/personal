# src/backend/compiler/code_compiler.py
from .dependency_resolver import DependencyResolver  # Import the DependencyResolver class

class CodeCompiler:
    def __init__(self):
        self.compiled_code = ""
        self.dependency_resolver = DependencyResolver()  # Instantiate the DependencyResolver

    def compile_code(self, node_graph):
        # Reset compiled code and clear previous dependencies
        self.compiled_code = ""
        self.dependency_resolver.clear_dependencies()

        # Traverse the node graph and compile code
        for node_id, node_data in node_graph.items():
            node_type = node_data.get("type")
            node_content = node_data.get("content")

            try:
                if node_type == "code":
                    self.compile_code_node(node_content)
                    # Example: Detect and add dependencies (e.g., import statements) during compilation
                    self.detect_dependencies(node_content)
                elif node_type == "data":
                    self.compile_data_node(node_content)
                # Add more conditions for other node types (control, function, etc.)
            except Exception as e:
                # If an error occurs during compilation, add it to the error list
                self.error_handler.add_error(str(e), node_id)

        return self.compiled_code

    def detect_dependencies(self, code_content):
        # Placeholder: Add logic to detect and add dependencies
        # Example: Check for import statements and add them to the DependencyResolver
        if "import" in code_content:
            self.dependency_resolver.add_dependency("some_module")


    def compile_code_node(self, code_content):
        # Placeholder: Just concatenate the code for now
        self.compiled_code += f"{code_content}\n"

    def compile_data_node(self, data_content):
        # Placeholder: Handle data node compilation (e.g., variable assignments)
        self.compiled_code += f"variable = {data_content}\n"
