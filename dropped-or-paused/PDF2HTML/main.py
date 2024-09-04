import subprocess

def convert_pdf_to_html(pdf_path, output_path):
    try:
        subprocess.run(['pdf2htmlEX', pdf_path, output_path])
        print("PDF converted to HTML successfully.")
    except FileNotFoundError:
        print("pdf2htmlEX is not installed. Please install it and try again.")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

# Usage example
pdf_file = 'path/to/your/pdf/file.pdf'
html_output = 'path/to/output/file.html'
convert_pdf_to_html(pdf_file, html_output)
