import os
import sys
import subprocess
from PyQt5.QtWidgets import (
    QApplication, QMainWindow, QVBoxLayout, QWidget, QPushButton, QTextEdit, QLabel)


class SteamCMDGUI(QMainWindow):
    def __init__(self):
        super().__init__()
        self.initUI()

    def initUI(self):
        self.setWindowTitle('SteamCMD GUI')
        central_widget = QWidget()
        layout = QVBoxLayout()

        # Create components
        self.output_box = QTextEdit()
        self.output_box.setReadOnly(True)
        self.run_button = QPushButton('Run SteamCMD')
        self.run_button.clicked.connect(self.run_steamcmd)
        status_label = QLabel('Ready')

        # Add components to layout
        layout.addWidget(self.output_box)
        layout.addWidget(self.run_button)
        layout.addWidget(status_label)

        central_widget.setLayout(layout)
        self.setCentralWidget(central_widget)

    def run_steamcmd(self):
        try:
            # Run SteamCMD as a subprocess
            steamcmd_path = os.path.join(
                'C:/Users/Bagheera/Documents/Documents 2/SteamCMD', 'steamcmd.exe')
            steamcmd = subprocess.Popen(
                [steamcmd_path], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, universal_newlines=True)
            while True:
                output = steamcmd.stdout.readline()
                if output == '' and steamcmd.poll() is not None:
                    break
                self.output_box.append(output.strip())
        except Exception as e:
            self.output_box.append(f'Error: {e}')


if __name__ == '__main__':
    app = QApplication(sys.argv)
    steamcmd_gui = SteamCMDGUI()
    steamcmd_gui.show()
    sys.exit(app.exec_())
