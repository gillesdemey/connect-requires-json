# connect-requires-json

[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/gillesdemey/connect-require-json.svg?branch=master)](https://travis-ci.org/gillesdemey/connect-require-json)
[![Coverage Status](https://coveralls.io/repos/github/gillesdemey/connect-require-json/badge.svg?branch=master)](https://coveralls.io/github/gillesdemey/connect-require-json?branch=master)

This middleware will validate incoming request bodies, throwing a `400` when the body is empty and `415` when the `Content-Type` header does not contain `json`.
