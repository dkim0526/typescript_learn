var foo = {}
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

import { Big } from 'big.js';

export const hey = new Big('111.11111111111111111111');
export const man = hey.plus(new Big('0.00000000000000000001'));
// To get a number:
const x: number = Number(man.toString()); // Looses the precision

