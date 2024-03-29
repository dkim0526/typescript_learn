class Menu {
    // Our properties
    // By default they are public, but can also be private or protected.
    items: Array<string>;   // The items in the menu, an array of strings
    pages: number; // How many pages will the menu be, a number

    // A straightforward constructor.
    constructor(item_list: Array<string>, total_pages: number) {
        this.items = item_list;
        this.pages = total_pages;
    }

    list(): void {
        console.log("Our menu for today:");
        for(var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

// Create a new instance of the menu class.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);

// Call the list metnhod.
sundayMenu.list();