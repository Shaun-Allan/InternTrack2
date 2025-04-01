import os
import pytesseract
from PIL import Image
from flask import Flask, request, jsonify
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive

gauth = GoogleAuth()
gauth.LocalWebserverAuth()
drive = GoogleDrive(gauth)

app = Flask(__name__)

GOOGLE_DRIVE_FOLDER_ID = "YOUR_GOOGLE_DRIVE_FOLDER_ID"

@app.route('/validate_document', methods=['POST'])
def validate_document():
    """
    Endpoint to validate the uploaded document against input details.
    """
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    input_details = request.form.to_dict()
    register_number = input_details.get("Register Number")
    document_type = input_details.get("Document Type", "Unknown")
    
    # Save file temporarily
    temp_path = f"temp_{file.filename}"
    file.save(temp_path)
    
    # Extract text using Tesseract OCR
    extracted_text = extract_text_from_image(temp_path)
    
    # Validate text
    if extracted_text and all(value.lower() in extracted_text.lower() for key, value in input_details.items() if key != "Document Type"):
        new_filename = f"{register_number}-{document_type.replace(' ', '_')}.png"
        upload_to_drive(temp_path, new_filename)
        os.remove(temp_path)
        return jsonify({"message": "Document validated and stored successfully in Google Drive.", "file_name": new_filename}), 200
    else:
        os.remove(temp_path)
        return jsonify({"error": "Validation failed. Please check the uploaded document."}), 400

def extract_text_from_image(image_path):
    """
    Extract text from an image using Tesseract OCR.
    """
    try:
        text = pytesseract.image_to_string(Image.open(image_path))
        return text.strip()
    except Exception as e:
        print(f"Error processing image: {e}")
        return None

def upload_to_drive(file_path, file_name):
    """
    Uploads the file to Google Drive.
    """
    file_drive = drive.CreateFile({'title': file_name, 'parents': [{'id': GOOGLE_DRIVE_FOLDER_ID}]})
    file_drive.SetContentFile(file_path)
    file_drive.Upload()

if __name__ == '__main__':
    app.run(debug=True)
