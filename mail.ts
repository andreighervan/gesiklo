const fetchAPI = require('node-fetch');

const url = 'https://api.sendinblue.com/v3/contacts';
const options = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ updateEnabled: false })
};

export function addContactToList() {
    fetchAPI(url, options)
        .then(res => res.json())
        .then(json => console.log(json))
        .catch(err => console.error('error:' + err));
}