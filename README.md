ConsoleIt!
=========

Utility to append console messages to the DOM. Useful when using RequireBin, JSFiddle, or the like.

###RequireBin
Example usage in RequireBin:
```javascript
var console = require("consoleit");
console.log("This will appear in the DOM just like magic!");
```

###JSFiddle
To use this in JSFiddle, you must also add the following script tag to your HTML:
```html
<script src="http://wzrd.in/bundle/consoleit"></script>
```
The use the JavaScript code as shown above.

###Options

By default, output will be appended to the `document.body`.
You can optionally send the output to a particular element.
Simply pass the element id (as a string) to ConsoleIt as shown below.

```html
<div id="log"></div>
```

```javascript
var console = require("consoleit")("log");
console.log("This will be appended to the 'log' div.");
```

###For use under [MIT license](http://github.com/YuzuJS/consoleit/raw/master/LICENSE)
