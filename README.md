# gql-sketch

Minimal graphql client for Sketch, powered by [Futures](https://github.com/fluture-js/Fluture/wiki/Comparison-to-Promises)

```js
import Client from 'gql-sketch';

const query = Client('http://example.com/my-graphql-endpoint').query(`
  {
    allFilms {
      films {
        title,
        actor,
        catchphrase
      }
    }
  }
`)

query.fork(
  err => log('ya done goofed'),
  res => {
    log('result!');
    log(res.allFilms.films[0].title);
  }
)
```
