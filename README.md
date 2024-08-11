# @beanc16/jwt-helpers

Helpers to make JWT handling simpler.

<!-- Badges -->
![version][gpr-version]
![release][gpr-release]



## Table of Contents
- [@beanc16/jwt-helpers](#beanc16jwt-helpers)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [Generating a JWT Token](#generating-a-jwt-token)
    - [Validating a JWT Token](#validating-a-jwt-token)
    - [Getting Data from a JWT Token](#getting-data-from-a-jwt-token)
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

### Validating a JWT Token

```js
const { isTokenValid } = require("@beanc16/jwt-helpers");

const jwt = isTokenValid("someToken");
```

### Getting Data from a JWT Token

```js
const { getDataFromToken } = require("@beanc16/jwt-helpers");

const data = getDataFromToken("someToken");
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
[gpr-version]: https://img.shields.io/github/package-json/v/@beanc16/jwt-helpers
[gpr-release]: https://img.shields.io/github/v/release/@beanc16/jwt-helpers
