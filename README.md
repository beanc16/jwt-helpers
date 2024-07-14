# @beanc16/jwt-helpers

Helpers to make JWT handling simpler.

<!-- Badges -->
![npm][npm-version]
![license][npm-license]
![downloads][npm-downloads]



## Table of Contents
- [@beanc16/jwt-helpers](#beanc16jwt-helpers)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [Generating a JWT Token](#generating-a-jwt-token)
    - [Authenticating a JWT Token](#authenticating-a-jwt-token)
  - [License](#license)


## Install
This is a [Node.js](https://nodejs.org/en/) module available through the github registry.

```bash
$ npm install @beanc16/jwt-helpers
```



## Usage

### Generating a JWT Token

```js
const { getAccessToken } = require("@beanc16/jwt-helpers");

const jwt = getAccessToken({ foo: "bar" });
```

### Authenticating a JWT Token

```js
const { authenticateTokenServiceToService } = require("@beanc16/jwt-helpers");
const express = require("express");

const app = express();

app.get("/some-url", authenticateTokenServiceToService, (req, res) =>
{
  res.send("Successfully authenticated!");
});
```



## License
[MIT](https://choosealicense.com/licenses/mit/)



<!-- Shield URLs -->
[npm-version]: https://img.shields.io/npm/v/@beanc16/jwt-helpers
[npm-license]: https://img.shields.io/npm/l/@beanc16/jwt-helpers
[npm-downloads]: https://img.shields.io/npm/dm/@beanc16/jwt-helpers