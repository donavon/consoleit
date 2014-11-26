/*global document*/
"use strict";

var insertCss = require("insert-css");
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

function insertStyle() {
    var css = 'pre.consoleit {margin:0 0 0 20px; position:relative}' +
              'pre.consoleit:before {position:absolute; left:-15px}' +
              'pre.consoleit.info:before {content:"\\25CF"; color:#4072B4}' +
              'pre.consoleit.warn:before {content:"\\25B2"; color:#ffcc09}' +
              'pre.consoleit.error:before {content:"\\25A0"; color:#ff0909}';
    insertCss(css);
}

function determineElement(el) {
    insertStyle(); // First time through, insert our style sheet.
    element = elementName ? document.getElementById(elementName) : document.body;
    appendChild = actuallyAppendChild; // Reassign. Isn't JavaScript cool?
    appendChild(el);
}

var appendChild = determineElement;

console.log = function log() {
    var args = Array.prototype.slice.call(arguments, 0);
    var text = substituteStrings(args);
    var el = document.createElement("pre");
    el.className = "consoleit";
    el.textContent = text;
    appendChild(el);
};

module.exports = console;
