"use strict";

function serializeObject(obj) {
    var str;
    try {
        str = " " + JSON.stringify(obj);
    } catch(ex) {
        str = "";
    }
    return "Object" + str;
}

module.exports = function substituteStrings(args) {
    var results = [];

    var sub = args[0];
    // Is the first argument a string and does it contain substituation patterns (ex: "%d")?
    if (typeof sub === "string" && sub.match(/%[idsf]/)) {
        args.shift(); // Remove the zeroth element from the array (ie: what is now sub).
        while(args.length && /%[idsf]/.test(sub)) { // While there are more args and moew patterns...
            var pos = /%[idsf]/.exec(sub).index;
            var match = args.shift();
            var replacement;
            switch(sub[pos+1]) {
            case "i":
            case "d":
                replacement = parseInt(match, 10);
                break;
            case "s":
                replacement = match;
                break;
            case "f":
                replacement = parseFloat(match);
                break;
            }
            sub = sub.substr(0, pos) + replacement + sub.substr(pos+2);
        }
        results.push(sub);
    }

    // Append any remaining args.
    args.forEach(function (arg) {
        if (typeof arg === "object") {
            results.push(serializeObject(arg));
        } else {
            results.push(arg);
        }
    });

    return results.join(" ");
};
