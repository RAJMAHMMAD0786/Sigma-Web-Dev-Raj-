let user = {
    firstName: "Raj",
    lastName: "Mahmmad",

    // Getter
    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    // Setter
    set fullName(name) {
        let parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


console.log(user.fullName);   // Getter → "Raj Mahmmad"

user.fullName = "Rahul Kumar";  // Setter

console.log(user.firstName);  // "Rahul"
console.log(user.lastName);   // "Kumar"
