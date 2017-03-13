# Attributor
A quick way to visually see all an attribute/content of the DOM elements in your page.

## Documentation

```js
new Attributor(selector, attributeCallback)
```

| Name      | Type              | Description              |
| --------- | ----------------- | ------------------------ |
| `selector` | String | Selector for elements to be checked|
| `attributeCallback` | Function | Callback to select the attribute to be surfaced, given an element|


## Example
For example, if you want to see the `class` values for all `p` elements:

```js
var att = new Attributor('p', function(el){return el.getAttribute('data-block-track')});
```

If you want to see the `innerHTML` values for all elements with `alert` class:

```js
var att = new Attributor('.alert', function(el){ return el.innerHTML});
```