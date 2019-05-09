import PetShopView from '/view/petShopView.js';

export default class MenuController{
    constructor(cats, dogs, hamsters){
        this.cats = cats;
        this.dogs = dogs;
        this.hamsters = hamsters;
        this.catsBreed = [];       
        this.dogsBreed = [];
        this.petCards = [];
        this.breed;

        this.petShopView;


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
                new PetShopView (this.catsBreed,
                this.dogsBreed);
        this.petShopView.onBreedClick = this.onBreedClick.bind(this);
        this.petShopView.init();
            
    }

    //event handler
    onBreedClick(e) {
        let target = e.target;        
        
        if (target.parentElement.classList.contains("dogsBreed")){
            this.breed = target.innerHTML;
            this.getPetsByBreed(this.dogs, this.breed);
            this.petShopView.showPetCards(this.petCards);

        } else if (target.parentElement.classList.contains("catsBreed")){
            this.breed = target.innerHTML;
            this.getPetsByBreed(this.cats, this.breed);
            this.petShopView.showPetCards(this.petCards);

        } else if (target.parentElement.classList.contains("hamsters")){
            this.petShopView.showPetCards(this.hamsters);
        } else if (target.parentElement.classList.contains("cats")){
            this.petShopView.showPetCards(this.cats);
        } else if (target.parentElement.classList.contains("dogs")){
            this.petShopView.showPetCards(this.dogs);
        }
    }

    //make array of pets for view 
    getPetsByBreed(arr, breed){
        this.petCards = [];
        arr.forEach(item => {
            if (item.breed == breed){ 
                this.petCards.push(item);
            }
        })
    }
}

