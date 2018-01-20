"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// 중간처리 operator map
new rxjs_1.Observable(function (observer) {
    var count = 0;
    var timeout = setInterval(function () {
        ++count;
        observer.next(count);
    }, 1000);
}).map(function (data) { return data * data; }).subscribe(function (data) { return console.log(data); });
