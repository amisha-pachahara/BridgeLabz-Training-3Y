// Creating user object
const user = {
    name: "Amisha",

    // Arrow function
    showName: () => {
        console.log("Arrow Function:", this.name);
    }
};

// Calling arrow function
user.showName();

// Fix using normal function
const user2 = {
    name: "Amisha",

    // Normal function
    showName: function () {
        console.log("Normal Function:", this.name);
    }
};

// Calling normal function
user2.showName();