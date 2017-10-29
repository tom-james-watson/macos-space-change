# macos-space-change

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
