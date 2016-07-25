# connect-requires-json

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


This middleware will validate incoming request bodies, throwing a `400` when the body is empty and `415` when the `Content-Type` header does not contain `json`.
