/*global document*/
"use strict";

var substituteStrings = require("./substituteStrings");

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

console.log = function log() {
    var args = Array.prototype.slice.call(arguments, 0);
    var text = substituteStrings(args);
    var el = document.createElement("pre");
    el.style.margin = "0";
    el.textContent = text;
    appendChild(el);
};

module.exports = console;
