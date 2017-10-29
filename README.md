# macos-space-change

[![npm](https://img.shields.io/npm/dt/macos-space-change.svg?style=flat-square)](https://www.npmjs.com/package/macos-space-change)
[![npm](https://img.shields.io/npm/dm/macos-space-change.svg?style=flat-square)](https://www.npmjs.com/package/macos-space-change)
[![npm](https://img.shields.io/npm/v/macos-space-change.svg?style=flat-square)](https://www.npmjs.com/package/macos-space-change)
[![npm](https://img.shields.io/npm/l/macos-space-change.svg?style=flat-square)](https://www.npmjs.com/package/macos-space-change)

Setup a callback that fires when a user changes space on macOS. Implemented natively using [nodobjc](https://github.com/TooTallNate/NodObjC) Objective-C bridge.

## Usage

```javascript
var macOSSpaceChange = require('macos-space-change')
macOSSpaceChange.onSpaceChange(function() {
  console.log('User changed space')
})
```

## Authors

Tom Watson <tom@tomjwatson.com>

Jack Lypskyi <https://github.com/avaganz>
