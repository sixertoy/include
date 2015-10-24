# A better require NodeJS

[![Gemfury package][gemfury-img]][gemfury-url] [![MIT License][license-img]][license-url] [![status][travis-img]][travis-url] [![coverage][coverall-img]][coverall-url]

> A better require NodeJS

## Install

```bash
npm config set registry https://npm-proxy.fury.io/{secret}/sixertoy/
npm config set ca ""
npm install https://npm.fury.io/sixertoy/include/-/latest
```

## Usage

**1. Before all include() calls**
```javascript
var process.cwd(),
    path = require('path'),
    include = require('include');
include.root(path.join(cwd, 'src/path'));
```

**2. Require a module**
```javascript
var include = require('include'),
    module = include('path/to/my/module');
```

**3. Returns setted path**
```javascript
var include = require('include'),
    root = include.root();
```

[gemfury-url]: https://gemfury.com/f/partner
[gemfury-img]: http://gemfury.com/images/badge/light.png

[coverall-url]: https://coveralls.io/r/sixertoy/include
[coverall-img]: https://img.shields.io/coveralls/sixertoy/include.svg?style=flat-square

[travis-url]: https://travis-ci.org/sixertoy/include
[travis-img]: http://img.shields.io/travis/sixertoy/include.svg?style=flat-square

[license-img]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: LICENSE-MIT
