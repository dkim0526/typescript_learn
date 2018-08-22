/**
 * Generic are templates that allow the same function to accept arguments of various different types
 * Creating reusable components using generic is better than using the any data type, as generics
 * preserve the types of the variables that go in and out of them.
 */
function genericFunc(argument) {
    var arrayOfT = []; // create empty array of type T.
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunc("beep");
console.log(arrayFromString[0]);
console.log(typeof arrayFromString[0]);
var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);
console.log(typeof arrayFromNumber[0]);
var arrayFromBool = genericFunc(false);
console.log(arrayFromBool[0]);
console.log(typeof arrayFromBool[0]);
