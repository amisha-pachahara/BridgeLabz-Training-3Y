// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype
Car.prototype.getDetails = function () {
    console.log("Brand: " + this.brand);
    console.log("Model: " + this.model);
};

// Creating car objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Mahindra", "Thar");

// Calling prototype method
car1.getDetails();

console.log("----------------");

car2.getDetails();