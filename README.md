# egg-passport-bitbucket

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-passport-bitbucket.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-passport-bitbucket
[travis-image]: https://img.shields.io/travis/eggjs/egg-passport-bitbucket.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-passport-bitbucket
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-passport-bitbucket.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-passport-bitbucket?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-passport-bitbucket.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-passport-bitbucket
[snyk-image]: https://snyk.io/test/npm/egg-passport-bitbucket/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-passport-bitbucket
[download-image]: https://img.shields.io/npm/dm/egg-passport-bitbucket.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-passport-bitbucket

bitbucket passport plugin for egg.

## Install

```bash
$ npm i egg-passport-bitbucket --save
```

## Usage

```js
// config/plugin.js
exports.passportBitbucket = {
  enable: true,
  package: 'egg-passport-bitbucket',
};
```

## Configuration

```js
// config/config.default.js
exports.passportBitbucket = {
  key: 'your oauth key',
  secret: 'your oauth secret',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE.txt)
