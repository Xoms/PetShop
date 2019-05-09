//calculates start tasks and sends it to initialViewer
export default class InitialQueryController{

    constructor(pets){
        this.pets = pets;
        this.avPrice = 0;
        this.aboveAveragePrice = [];
        this.fluffyOrWhite = [];

    }

    getAveragePrice(pets){        
        for (let i = 0; i < pets.length; i++){
            this.avPrice += this.pets[i].price;
        } 
        this.avPrice = this.avPrice / (pets.length - 1);        
    }
    getPetsAboveAveragePrice (pets){
        for (let i = 0; i < pets.length; i++){
            if (pets[i].price >= this.avPrice) {
                this.aboveAveragePrice.push(pets[i]);
            }
        }
    }

    getFluffyOrWhite(pets){
        for (let i = 0; i < pets.length; i++){
            if (pets[i].color === "White" || pets[i].isFluffy === true){
                this.fluffyOrWhite.push(pets[i]);
            }
        }
    }

    run() {
        this.getAveragePrice(this.pets);
        this.getPetsAboveAveragePrice(this.pets);
        this.getFluffyOrWhite(this.pets);        
    }

}