console.log("This tutorial is based on object oriented programing :");

let obj = {
    a: 10,
    b: 20,
    c: "Harry",
}

console.log(obj);

// animal obj
let animal = {
    eat: true
};

// rabbit obj   (Khargoss)
let rabbit = {
    jump: true
};

// Prototype set
rabbit.__proto__ = animal;    //set rabbit. [prototype]=animal

console.log(rabbit.jump);
console.log(rabbit.eat);

// prototype ---> prototype additional property hota hai   


// Animal class 
class Animal {
    // constructor 
    constructor(name) {
        this.name = name;
        console.log("object is created...");
    }

    // function
    eats() {
        console.log("Kha raha hoon...");
    }

    jumps() {
        console.log("Kood raha hoon...");
    }
}


// Lion class 
class Lion extends Animal {           //Animal ko inherite kar liya Lion mai 
    // constructor
    constructor(name) {
        super(name);             //super keywords
        console.log("object is created and He is a Lion...");
    }

    // methods overriding.
    eats() {
        super.eats();
        console.log("Kha raha hoon and roar...");     //roar->dahadna 
    }
}


// Animal
let a = new Animal("Dog");
console.log(a);

console.log(a.eats());
console.log(a.jumps());
console.log("This is a Animal:-",a.name);


// Lion
let l = new Lion("Shera");
console.log(l);

console.log(l.eats());
console.log(l.jumps());
console.log("This is a Lion:-",l.name);
console.log(l.eats());                        //super keywords ke helps se ho raha hai ye 


// instanceof ---> obj is a instanceof class

console.log("kya l obj hai Lion ka :->",l instanceof Lion);
console.log("kya l obj hai Animal ka :->",l instanceof Animal);

console.log("kya a obj hai Animal ka :->",a instanceof Animal);
console.log("kya a obj hai Lion ka :->",a instanceof Lion);


