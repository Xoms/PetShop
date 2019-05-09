//calculates start tasks and sends it to initialViewer
import InitialViewer from '/view/initialViewer.js';

export default class InitialQueryController{

    constructor(pets, cats){
        this.pets = pets;
        this.avPrice = 0;
        this.aboveAveragePrice = [];
        this.fluffyOrWhite = [];
        this.cats = cats;
        this.initialViewer;

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

        this.initialViewer = new InitialViewer(this.cats, 
            this.fluffyOrWhite,
            this.aboveAveragePrice);
        this.initialViewer.run();        
    }

}