# patrolling #

[![NPM Package][npm_img]][npm_site]
[![Dependency status][david_img]][david_site]

[![NPM][nodei_img]][nodei_site]

Patrol buffers and flush periodically or when the buffer is full.

## Installation ##

```sh
npm install patrolling --save
```

## Usage ##

```js
import Patrolling from 'patrolling';

var patrolling = new Patrolling( capacity, timeout, flush, push );

## Test ##

```js
npm test

```
## License ##

MIT. See [LICENSE.md][license] for details.

[npm_img]: https://img.shields.io/npm/v/patrolling.svg
[npm_site]: https://www.npmjs.org/package/patrolling
[nodei_img]: https://nodei.co/npm/debounce-promise.png
[nodei_site]: https://nodei.co/npm/patrolling
[david_img]: https://david-dm.org/szchenghuang/patrolling/status.svg
[david_site]: https://david-dm.org/szchenghuang/patrolling/
[license]: http://github.com/szchenghuang/patrolling/blob/master/LICENSE.md
