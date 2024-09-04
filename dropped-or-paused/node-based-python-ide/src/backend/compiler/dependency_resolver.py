# src/backend/compiler/dependency_resolver.py

class DependencyResolver:
    def __init__(self):
        self.dependencies = set()

    def add_dependency(self, dependency):
        # Add a dependency to the set
        self.dependencies.add(dependency)

    def clear_dependencies(self):
        # Clear the set of dependencies
        self.dependencies.clear()

    def get_dependencies(self):
        # Get the set of dependencies
        return self.dependencies
