# gql-sketch
[![npm](https://img.shields.io/npm/v/gql-sketch.svg)](https://www.npmjs.com/package/gql-sketch)
![Sketch.app](https://img.shields.io/badge/Sketch.app-43-brightgreen.svg)

Minimal graphql client for Sketch.

```js
import Client from 'gql-sketch';

Client('http://example.com/my-graphql-endpoint').query(`
  {
    allFilms {
      films {
        title,
        actor,
        catchphrase
      }
    }
  }
`).then(
  ({ allFilms }) => {
    log('result!');
    log(allFilms.films[0].title);
  }
)
```
