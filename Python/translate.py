from google.cloud import translate_v2 as translate
import os

# Set the environment variable to your service account key
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'path/to/your/service-account-file.json'

def translate_text(text, target_lang):
    try:
        translate_client = translate.Client()
        result = translate_client.translate(text, target_language=target_lang)
        return result['translatedText']
    except Exception as e:
        print(f'An error occurred: {e}')
        return None

if __name__ == '__main__':
    source_text = 'Hello, world!'
    target_language = 'es'  # Spanish
    translated_text = translate_text(source_text, target_language)
    if translated_text:
        print(f'Translated text: {translated_text}')
