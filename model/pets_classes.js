class Pet {
    constructor (id, color, price, family){
        this.id = id;
        this.color = color;
        this.price = price;
        this.family = family;
    }
}

class Dog extends Pet {
    constructor (id, color, price, name, breed, family){
        super(id, color, price, family);
        this.name = name;
        this.breed = breed;
    }
}

class Cat extends Pet{
     constructor (id, color, price, name, breed, isFluffy, family){
        super(id, color, price, family);
        this.name = name;
        this.breed = breed;
        this.isFluffy = isFluffy;
    }
}

class Hamster extends Pet{
    constructor (id, color, price, isFluffy, family){
        super(id, color, price, family);
        this.isFluffy = isFluffy;
    }
}

export { Dog, Cat, Hamster};





//making  db.json
let i = 0;
//id, color, price, isFluffy, family
let hamster = new Hamster ((Date.now() + ++i), "ginger", 50, true, "Hamster"); 
let hamster1 = new Hamster ((Date.now() + ++i), "gray", 30, false, "Hamster");

//id, color, price, name, breed, isFluffy, family
let cat1 = new Cat ((Date.now() + ++i), "black", 50, "Vasiliy", "Sphinx", false, "Cat");
let cat2 = new Cat ((Date.now() + ++i), "ginger", 80, "Murka", "Persian", true, "Cat");

//id, color, price, name, breed, family
let dog1 = new Dog ((Date.now() + ++i), "brown", 100, "Fyodor", "Bigl", "Dog");
let dog2 = new Dog ((Date.now() + ++i), "black", 70, "Polkan", "Sheepdog", "Dog");

let pets = [];
pets.push(hamster, hamster1, cat1, cat2, dog1, dog2);

let db = JSON.stringify(pets, "", 4);
console.log (db);



