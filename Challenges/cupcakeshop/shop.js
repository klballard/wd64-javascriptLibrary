const Cupcake = require('./cupcake');

class Shop {
    constructor(location, owner) {
        this.location = location;
        this.owner = owner;
    }

    getLocation() {
        console.log(`This shop is at: ${this.location}`);
    }

    getOwner () {
        console.log(`This shop is owned by ${this.owner}`);
    }

    changeOwner(newOwner) {
        this.owner = newOwner;
    }
}

class CupcakeShop extends Shop {
    constructor(location, owner, name) {
        super(location, owner);             //this inherits the location and owner set above
        this.name = name;
        this.inventory = [];
        this.cash = 0;
    }

    bakeBatch(count, batter, icing, price){
        for(let i = 0; i < count; i++) {          // Make COUNT cupcakes, add them into inventory
            let newCupcake = new Cupcake(icing, batter, price);                                 
            this.inventory.push(newCupcake);
        }                                         
    }

    sellCupcake() {       // remove cupcake from inventory, increase cash by price of cupcake
        let soldCupcake = this.inventory.pop();
        this.cash += soldCupcake.price;
    }
}

let myShop = new CupcakeShop("Broad Ripple", "Bill Murray", "Inzombia Cupcakes");  // creating a new shop

myShop.bakeBatch(12, 'Chocolate', 'Vanilla Cream', 4);      //baking a new batch of cupcakes

myShop.sellCupcake();       // Selling three cupcakes
myShop.sellCupcake();
myShop.sellCupcake();

console.log(myShop.cash);


//! YE OLDEN WAY OF CONSTRUCTOR FUNCTIONS / CLASSES
 
function Fan (diameter, amps) {
    this.diameter = diameter;
    this.amps = amps;
}

var myFan = new Fan(12, 150);
myFan.turnOn();

Fan.prototype.turnOn = function () {
    this.isOn = true;
}