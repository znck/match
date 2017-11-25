
<div class="text-xs-center" align="center" style="margin: 20px">
  <img src="./docs/logo.png" height="255" alt="">
</div>

<div class="text-xs-center" align="center">

<!-- [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/) -->
[![NPM version](https://img.shields.io/npm/v/@znck/match.svg?style=flat)](https://npmjs.com/package/@znck/match)
[![NPM downloads](https://img.shields.io/npm/dm/@znck/match.svg?style=flat)](https://npmjs.com/package/@znck/match)
[![CircleCI](https://circleci.com/gh/znck/match/tree/master.svg?style=shield)](https://circleci.com/gh/znck/match/tree/master)
[![codecov](https://codecov.io/gh/znck/match/branch/master/graph/badge.svg)](https://codecov.io/gh/znck/match)

</div>

## Introduction

Tiny router (path matcher) for micro services.

## Install

```bash
npm i @znck/match
```

## Usage

```js
const match = require('@znck/match')

const params = match(/* pattern = */'/foo/:bar', /* url = */'/foo/1')
// { bar: 1 }
...
```

Read [path-to-regex](https://www.npmjs.com/package/path-to-regexp) for possible pattern values.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/znck/prop-types/releases).

## Author

**@znck/match** © [Rahul Kadyan](https://github.com/znck), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Rahul Kadyan with help from contributors ([list](https://github.com/znck/@znck/match/contributors)).

> [znck.me](https://znck.me) · GitHub [@Rahul Kadyan](https://github.com/znck) · Twitter [@@znck0](https://twitter.com/@znck0)
