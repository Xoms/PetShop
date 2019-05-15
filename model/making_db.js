//making  db.json
let i = 0;
//id, color, price, isFluffy, family
let hamster = new Hamster ((Date.now() + ++i), "ginger", 50, true, "Hamster"); 
let hamster1 = new Hamster ((Date.now() + ++i), "gray", 30, false, "Hamster");
let hamster2 = new Hamster ((Date.now() + ++i), "white", 60, false, "Hamster");

//id, color, price, name, breed, isFluffy, family
let cat1 = new Cat ((Date.now() + ++i), "black", 50, "Vasiliy", "Sphinx", false, "Cat");
let cat2 = new Cat ((Date.now() + ++i), "ginger", 80, "Murka", "Persian", true, "Cat");
let cat3 = new Cat ((Date.now() + ++i), "gray", 60, "Tihon", "Persian", false, "Cat");

//id, color, price, name, breed, family
let dog1 = new Dog ((Date.now() + ++i), "brown", 100, "Fyodor", "Bigl", "Dog");
let dog2 = new Dog ((Date.now() + ++i), "black", 70, "Polkan", "Sheepdog", "Dog");
let dog3 = new Dog ((Date.now() + ++i), "white", 80, "Bim", "Spaniel", "Dog");

let pets = [];
pets.push(hamster, hamster1, hamster2, cat1, cat2, cat3, dog1, dog2, dog3);

let db = JSON.stringify(pets, "", 4);
console.log (db);