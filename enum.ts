enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // Displays 'Green' as its value is 2 above


/**
 * The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of
 * type-checking during compilation. You might expect Object to play a similar role, as it does in other languages.
 * But variables of type Object only allow to assign any value to them - you can't tell arbitrary methods on them, even
 * ones that actually exist.
 */
let notSure: any = 4;
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);


console.log('hello');