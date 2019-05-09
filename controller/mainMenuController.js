import PetShopView from '/view/petShopView.js';

export default class MenuController{
    constructor(cats, dogs, hamsters){
        this.cats = cats;
        this.dogs = dogs;
        this.hamsters = hamsters;
        this.catsBreed = [];       
        this.dogsBreed = [];
        this.petCards = [];

        this.petShopView;


    }
    onBreedClick(e) {
        let target = e.currentTarget;
        if (target.className == )
    }

    

    getCatsBreed(){
        this.cats.forEach( item => {
            if (!this.catsBreed.includes(item.breed)){
              this.catsBreed.push(item.breed);  
            } 
        })
    }

    getDogsBreed(){
        this.dogs.forEach( item => {
            if (!this.dogsBreed.includes(item.breed)){
                this.dogsBreed.push(item.breed); 
            }
        })
    }

    init(){
        this.getDogsBreed();
        this.getCatsBreed();
        this.petShopView = 
                new PetShopView (this.menuController.catsBreed,
                this.menuController.dogsBreed);
            this.petShopView.init();
            this.petShopView.onBreedClick = this.onBreedClick.bind(this);
    }

    getPetByBreed(arr, breed){
        arr.forEach(item => {
            if (this.item.breed == breed){ 
                this.petCards.push(item);
            }
        })

    }
}

