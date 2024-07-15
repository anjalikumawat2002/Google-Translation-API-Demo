# Google-Translation-API-Demo
This repository contains demonstrations of using the Google Translation API in JavaScript (web) and Python environments. Learn how to integrate and utilize Google's powerful translation capabilities in your applications.

## JavaScript Implementation

### Prerequisites
- Google Cloud API key
- Web browser with JavaScript enabled

### Setup
1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Google-Translation-API-Demo.git

2. Navigate to the javascript directory:
   ```bash
   cd Google-Translation-API-Demo/javascript

3. Open index.html in a text editor.

4. Replace `YOUR_API_KEY` in translate.js with your actual Google Cloud API key:
   ```bash
   gapi.client.setApiKey('YOUR_API_KEY');

5. Save the changes.

### Usage
- Open index.html in a web browser.

- Click the "Authorize" button to sign in and load the Google Translation API.

- Enter text into the input field (sourceText), select a target language code (e.g., es for Spanish), and click "Translate".

- The translated text will appear below the input field.

## Python Implementation

### Prerequisites

- Python 3.x
- google-cloud-translate Python library (pip install google-cloud-translate)
- Service account key (service-account-file.json) with access to Google Translation API

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Google-Translation-API-Demo.git

2. Navigate to the python directory:
   ```bash
   cd Google-Translation-API-Demo/python

3. Install the google-cloud-translate library if not already installed:
   ```bash
   pip install google-cloud-translate

4. Set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` to the path of your service account key:
   ```bash
   export GOOGLE_APPLICATION_CREDENTIALS="path/to/your/service-account-file.json"

### Usage

- Run the Python script `translate.py` to translate text using Google Translation API:

```bash
python translate.py
```
- The script will translate the text "Hello, world!" to the target language specified in `translate.py` (e.g., "es" for Spanish).
- The translated text will be displayed in the console.

