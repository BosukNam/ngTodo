"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
// 최종처리 operator: 한개의 최종값을 Observable로 리턴
var source = rxjs_1.Observable.of(1, 2, 3, 4);
var result = source.reduce(function (prev, curr) { return prev + curr; });
var subscribe = result.subscribe(function (val) { return console.log('Sum:', val); });
