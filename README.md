# Attributor
A quick way to visually see all an attribute/content of the DOM elements in your page.

## Installation

```js
npm install -S attributor
```

## Documentation

```js
new Attributor(selector, attributeCallback)
```

| Name      | Type              | Description              |
| --------- | ----------------- | ------------------------ |
| `selector` | String | Selector for elements to be checked|
| `attributeCallback` | Function | Callback to select the attribute to be surfaced, given an element|


## Example

See example of usage for debugging [here on Codepen](http://codepen.io/piratefsh/pen/mAjWLY).

If you want to see the `class` values for all `p` elements:

```js
var Attributor = require('attributor');
var att = new Attributor('p', function(el){return el.getAttribute('class')});
```

If you want to see the `innerHTML` values for all elements with `alert` class:

```js
var Attributor = require('attributor');
var att = new Attributor('.alert', function(el){ return el.innerHTML});
```
