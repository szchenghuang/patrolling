# patrolling #

[![NPM Package][npm_img]][npm_site]
[![Dependency status][david_img]][david_site]

[![NPM][nodei_img]][nodei_site]

Patrol buffers and flush, periodically or when the buffer is full.

## Installation ##

```sh
npm install patrolling
```

## Usage ##

```js
import Patrolling from 'patrolling';

/**
 * @class Patrolling
 *
 * @constructor
 * @param {function} capacity The capacity of the buffer, i.e., maximum number of elements to hold.
 * @param {number} timeout Timeout in milliseconds to flush the buffer.
 * @param {function} flush How to flush the buffer.
 * @param {function} push How to push an element into the buffer.
 */
var patrolling = new Patrolling( capacity, timeout, flush, push );
```

## Example ##

```js
const buffer = [];

const capacity = 10;
const timeout = 100;
const flush = function() { buffer = []; console.log( 'flushed' ); }
const push = function( elem ) { buffer.push( elem ); }

const cache = new Patrolling( capacity, timeout, flush, push );

// At the tenth iteration the buffer is flushed because it hits the capacity.
// The buffer ends up with five elements left when the loop ends.
for ( var i = 0; i < 15; ++i ) {
  cache.push( i );
}

// If execution so far lasts for at least 100 milliseconds, the remaining five
// elements are flushed.

// You can flush it yourself anytime as well.
cache.flush();
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

