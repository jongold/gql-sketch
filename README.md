# gql-sketch
[![npm](https://img.shields.io/npm/v/gql-sketch.svg)](https://www.npmjs.com/package/gql-sketch)
![Sketch.app](https://img.shields.io/badge/Sketch.app-43-brightgreen.svg)

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
