# A better require NodeJS

<a href="https://gemfury.com/f/partner">
<img alt="Private Repository" src="http://gemfury.com/images/badge/light.png" />
</a>

> A better require NodeJS

## Install

```bash
npm i include --save --registry https://npm-proxy.fury.io/ZXwPcyRyjkJAeSsBzw9S/sixertoy/
```

## Usage

> before all include() calls

```javascript
var process.cwd(),
    path = require('path'),
    include = require('include');
include.root(path.join(cwd, 'src/path'));
```

> Require a module

```javascript
var include = require('include'),
    module = include('path/to/my/module');
```