//calculates start tasks and sends it to initialViewer
import StartTaskViewer from '/view/StartTaskViewer.js';

export default class StartTaskController{

    constructor(pets, cats){
        this.pets = pets;
        this.cats = cats;
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

    init() {
        this.aboveAveragePrice = [];
        this.fluffyOrWhite = [];
        this.avPrice = 0;
        
        this.getAveragePrice(this.pets);
        this.getPetsAboveAveragePrice(this.pets);
        this.getFluffyOrWhite(this.pets);


        this.startTaskViewer = new StartTaskViewer(this.cats, 
            this.fluffyOrWhite,
            this.aboveAveragePrice);
        this.startTaskViewer.render();        
    }

}