// Here we define our Food interface, its properties, and their types
interface Food {
    name: string;
    calories: number;
}

// We tell our function to expect an object that fulfills the Food interface.
// This way we know that the properties we need will always be available.
function speak(food: Food): void {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}

var ice_cream = {
    name: "BBaBBiCo",
    calories: 150,
}

speak(ice_cream);