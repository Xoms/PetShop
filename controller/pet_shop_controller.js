import PetShopView from '/view/petShopView.js';

export default class PetShopController{
    constructor(cats, dogs, hamsters){
        this.cats = cats;
        this.dogs = dogs;
        this.hamsters = hamsters;
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
        this.catsBreed = [];       
        this.dogsBreed = [];
        this.petCards = [];
        this.breed;
        this.getDogsBreed();
        this.getCatsBreed();

        this.petShopView = 
                new PetShopView (this.catsBreed,
                this.dogsBreed);
        this.petShopView.onBreedClick = this.onBreedClick.bind(this);
        this.petShopView.init();
            
    }

    //event handler (listener added in petShopView)
    onBreedClick(e) {
        let target = e.target; 
        
        this.onTargetClick(target);

    }      
    onTargetClick(target){

        //click on breed of dogs
        if (target.parentElement.classList.contains("dogsBreed")){
            this.currentTarget = target; //save current category
            this.breed = target.innerHTML;
            //get Pet Crads by breed
            this.getPetsByBreed(this.dogs, this.breed);
            //and send them to view
            this.petShopView.showPetCards(this.petCards);

        //click on breed of cats
        } else if (target.parentElement.classList.contains("catsBreed")){
            this.currentTarget = target;
            this.breed = target.innerHTML;
            this.getPetsByBreed(this.cats, this.breed);
            this.petShopView.showPetCards(this.petCards);
        //show all Hamsters
        } else if (target.parentElement.classList.contains("hamsters")){
            this.currentTarget = target;
            this.petShopView.showPetCards(this.hamsters);
        //Show all cats
        } else if (target.parentElement.classList.contains("cats")){
            this.currentTarget = target;
            this.petShopView.showPetCards(this.cats);
        //Show all dogs
        } else if (target.parentElement.classList.contains("dogs")){
            this.currentTarget = target;
            this.petShopView.showPetCards(this.dogs);
        }
    }

    //make array of pets for view 
    getPetsByBreed(arr, breed){
        //arr - array of current pets family
        //breed - current breed
        this.petCards = [];
        arr.forEach(item => {
            if (item.breed == breed){ 
                this.petCards.push(item);
            }
        })
    }
}

