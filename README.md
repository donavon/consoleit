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
Then use the JavaScript code as shown above.

###Methods
ConsoleIt supports the following methods:

| Method          | Description                                |
| --------------- | :----------------------------------------- |
| console.log()   | For general output of logging information. |
| console.info()  | Informative logging information.           |
| console.warn()  | Outputs a warning message.                 |
| console.error() | Outputs an error message.                  |

Colored icons are placed next to all but `console.log()` as follows:

![alt text](https://github.com/YuzuJS/consoleit/raw/master/console-output.png "Example Console Output")

###String Substitution

You can also use the following string substitution characters in your output.

| Substitution string | Description                     |
| ------------------- | :------------------------------ |
| %d or %i            | Outputs an integer.             |
| %s                  | Outputs a string.               |
| %f                  | Outputs a floating-point value. |

See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions) for further details.

```JavaScript
console.log("Only %d days until %s!", 30, "Christmas");
```

###JavaScript Objects

JavaScript obects will be converted to JSON.

For example:
```JavaScript
var obj = {x:1, y:2};
console.log(obj);
```

Would display:
```
Object {"x":1,"y":2}
```

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
