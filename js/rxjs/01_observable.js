"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// observable: stream of data
new rxjs_1.Observable(function (observer) {
    var count = 0;
    var timeout = setInterval(function () {
        ++count;
        observer.next(count);
    }, 1000);
});
