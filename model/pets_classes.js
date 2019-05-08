class Pet {
    constructor (color, price, family){
        this.color = color;
        this.price = price;
        this.family = family;
    }
}

class Dog extends Pet {
    constructor (color, price, name, breed, family){
        super(color, price, family);
        this.name = name;
        this.breed = breed;
    }
}

class Cat extends Pet{
     constructor (color, price, name, breed, isFluffy, family){
        super(color, price, family);
        this.name = name;
        this.breed = breed;
        this.isFluffy = isFluffy;
    }
}

class Hamster extends Pet{
    constructor (color, price, isFluffy, family){
        super(color, price, family);
        this.isFluffy = isFluffy;
    }
}
//color, price, isFluffy, family
let hamster = new Hamster ("ginger", 50, true, "Hamster"); 
let hamster1 = new Hamster ("gray", 30, false, "Hamster");

//color, price, name, breed, isFluffy, family
let cat1 = new Cat ("black", 50, "Vasiliy", "Sphinx", false, "Cat");
let cat2 = new Cat ("ginger", 80, "Murka", "Persian", true, "Cat");

//color, price, name, breed, family
let dog1 = new Dog ("brown", 100, "Fyodor", "Bigl", "Dog");
let dog2 = new Dog ("black", 70, "Polkan", "Sheepdog", "Dog");

let pets = [];
pets.push(hamster, hamster1, cat1, cat2, dog1, dog2);

db = JSON.stringify(pets, "", 4);
console.log (db);



