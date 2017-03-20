import fetch from 'sketchfetch';

const Client = endpoint => ({
  query: q =>
    fetch(endpoint, {
      method: 'POST',
      body: {
        query: q.replace(/\s/g, ''),
      },
    }),
});

export default Client;
