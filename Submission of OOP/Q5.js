// Q5. Ride-Sharing Application (Inheritance + Error Handling)

class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, vehicleNumber) {
        super(name, rating);
        this.vehicle = vehicle;
        this.vehicleNumber = vehicleNumber;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        // Validate distance
        if (
            this.distance === undefined ||
            this.distance === null ||
            this.distance < 0 ||
            isNaN(this.distance)
        ) {
            throw new Error("Invalid distance. Please enter a valid distance.");
        }

        let farePerKm = 15;
        return this.distance * farePerKm;
    }
}

// Create driver and display details
let driver1 = new Driver("Amit", 4.8, "Car", "UP85AB1234");

console.log("Driver:", driver1.name);
console.log("Rating:", driver1.rating);
console.log("Vehicle:", driver1.vehicle);
console.log("Vehicle Number:", driver1.vehicleNumber);

// Valid trip
try {
    let trip1 = new Trip("Mathura", "Agra", 60);
    console.log("From:", trip1.fromLocation);
    console.log("To:", trip1.toLocation);
    console.log("Fare: Rs.", trip1.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}

// Invalid trip
try {
    let trip2 = new Trip("Mathura", "Delhi", -10);
    console.log("Fare: Rs.", trip2.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}
