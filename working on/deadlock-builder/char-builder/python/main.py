from pathlib import Path
import pytesseract
from PIL import Image

directory = r"E:/VSCode Repo/deadlock-builder/images/abrams/"
pytesseract.pytesseract.tesseract_cmd = r"C:/Program Files/Tesseract-OCR/tesseract.exe"

files = Path(directory).glob('*.png')

for file in files:
    print(pytesseract.image_to_string(Image.open(file)))