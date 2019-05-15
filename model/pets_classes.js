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









