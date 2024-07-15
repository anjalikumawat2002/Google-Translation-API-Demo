function authenticate() {
  return gapi.auth2.getAuthInstance()
      .signIn({scope: 'https://www.googleapis.com/auth/cloud-translation'})
      .then(() => console.log('Sign-in successful'))
      .catch(err => console.error('Error signing in', err));
}

function loadClient() {
  gapi.client.setApiKey('YOUR_API_KEY');
  return gapi.client.load('https://translation.googleapis.com/$discovery/rest?version=v3')
      .then(() => console.log('GAPI client loaded for API'))
      .catch(err => console.error('Error loading GAPI client for API', err));
}

function execute() {
  const sourceText = document.getElementById('sourceText').value;
  const targetLanguage = 'es';  // Replace with your target language code
  return gapi.client.language.translations.translate({
    'q': sourceText,
    'target': targetLanguage
  }).then(response => {
    console.log('Response', response);
    document.getElementById('output').innerText = response.result.data.translations[0].translatedText;
  }).catch(err => {
    console.error('Execute error', err);
    document.getElementById('output').innerText = 'An error occurred: ' + err.message;
  });
}

gapi.load('client:auth2', function() {
  gapi.auth2.init({client_id: 'YOUR_CLIENT_ID'});
});
