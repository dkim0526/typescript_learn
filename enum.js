var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
var notSure = 4;
notSure = "maybe a string instead";
console.log(notSure);
notSure = false;
console.log(notSure);
