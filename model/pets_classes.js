class Pet {
    constructor (color, price){
        this.color = color;
        this.price = price;
    }
}

class Dog extends Pet {
    constructor (color, price, name, breed){
        super(color, price);
        this.name = name;
    }
}

class Cat extends Pet{
     constructor (color, price, name, breed, isFluffy){
        super(color, price);
        this.name = name;
        this.isFluffy = isFluffy;
    }
}

class Hamster extends Pet{
    constructor (color, price, isFluffy){
        super(color, price);
        this.isFluffy = isFluffy;
    }
}

let hamster = new Hamster ("ginger", 50, true);
let hamster1 = new Hamster ("gray", 30, false);

console.log (hamster.isFluffy);
console.log (hamster.color);
console.log (hamster.price);
console.log (hamster1.isFluffy);

let cat1 = new Cat ("black", 50, "Vasiliy", "Sphinx" false);
let cat2 = new Cat ("ginger", 80, "Murka", "Persian", true);

let dog1 = new Dog ("brown", 100, "Fyodor", "Bigl");
let dog2 = new Dog ("black", 70, "Polkan", "Sheepdog");

let pets = [];
pets.push (hamster, hamster1, cat1, cat2, dog1, dog2);