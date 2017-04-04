import fetch from 'sketch-module-fetch-polyfill';

const Client = endpoint => ({
  query: q =>
    fetch(endpoint, {
      method: 'POST',
      body: {
        query: q.replace(/(\s\n)/g, ''),
      },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json()).then(json => json.data),
});

export default Client;
