'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Jsadd = undefined;

require('babel-polyfill');

var Jsadd = exports.Jsadd = function Jsadd() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    return a + b;
}; // require('babel-polyfill')