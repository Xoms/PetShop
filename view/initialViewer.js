//Shows start task (show all Cats, show Pets with price above average, 
//show fluffy or white pets)

export default class InitialViewer{
    constructor(cats, fluffyOrWhite, aboveAveragePrice){
        this.cats = cats;
        this.fluffyOrWhite = fluffyOrWhite;
        this.aboveAveragePrice = aboveAveragePrice;

    }

    showFluffyOrWhite(){
        const elem = document.querySelector(".fluffyOrWhite");
        let outStr = `<h3>Fluffy or White pets</h3>`;

        for (let i = 0; i < this.fluffyOrWhite.length; i++){
            //${this.fluffyOrWhite[i].id};
            outStr += `<div class = item>
                <div>
                ${this.fluffyOrWhite[i].family}; 
                ${this.fluffyOrWhite[i].price} 
                </div>
                <div><button class = "toCart">+</button></div>
                </div>`;
        }
        elem.innerHTML = outStr;
    }  

    showCats(){
        const elem = document.querySelectorAll(".cats")[0];
        let outStr = `<h3>Cats</h3>`;

        for (let i = 0; i < this.cats.length; i++){
            outStr += `<div class = item>
                <div>
                ${this.cats[i].name}; ${this.cats[i].price}   
                </div>
                <div><button class = "toCart">+</button></div>
                </div>`;
        }
        elem.innerHTML = outStr;
    }

    showPetsAboveAverage(){
        const elem = document.querySelector(".aboveAveragePrice");
        let outStr = `<h3>Pets with price above Average </h3>`;

        for (let i = 0; i < this.aboveAveragePrice.length; i++){
            outStr += `<div class = item>
                <div>
                ${this.aboveAveragePrice[i].family}; 
                ${this.aboveAveragePrice[i].price} 
                </div>
                <div><button class = "toCart">+</button></div>
                </div>`;
        }
        elem.innerHTML = outStr;
    }

    run(){
        this.showFluffyOrWhite();
        this.showCats();
        this.showPetsAboveAverage();
    }
}