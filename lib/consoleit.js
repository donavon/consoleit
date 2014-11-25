"user strict";

var element;
var elementName;

var console = function (name) {
    elementName = name;
    return console;
};

function actuallyAppendChild(el) {
    element.appendChild(el);
}

function determineElement(el) {
    element = elementName ? document.getElementById(elementName) : document.body;
    appendChild = actuallyAppendChild; // Reassign. Isn't JavaScript cool?
    appendChild(el);
}

var appendChild = determineElement;

console.log = function log(msg) {
    var el = document.createElement("pre");
    el.style.margin = "0";
    el.textContent = msg;
    appendChild(el);
};

module.exports = console;
