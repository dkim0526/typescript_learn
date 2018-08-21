"use strict";
exports.__esModule = true;
var foo = {};
var bar = foo;
var baz = {};
// foo.baz = 123;
// console.log(bar.baz);
console.log(foo == bar);
console.log(foo == baz);
// True
console.log(undefined == undefined);
// True
console.log(null == undefined);
// False
console.log(0 == undefined);
// False
console.log('' == undefined);
// False
console.log(false == undefined);
// Closere: a function that has access to a variable from the outer scope. The variable in the outer function
// have been closed by (or bound in) the inner function. Hence the term is Closure.
console.log(.1 + .2);
var big_js_1 = require("big.js");
exports.hey = new big_js_1.Big('111.11111111111111111111');
exports.man = exports.hey.plus(new big_js_1.Big('0.00000000000000000001'));
// To get a number:
var x = Number(exports.man.toString()); // Looses the precision
