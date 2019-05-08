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
        let outStr = `<h2>Fluffy or White pets<h2>`;

        for (let i = 0; i < this.fluffyOrWhite.length; i++){
            outStr += `${this.fluffyOrWhite[i].toString} 
            <button class = "toCart">+</button><br>`;
        }
        elem.innerHTML = outStr;
    }

    showCats(){
        const elem = document.querySelectorAll(".Cats")[0];
        let outStr = `<h2>Cats <h2>`;

        for (let i = 0; i < this.cats.length; i++){
            outStr += `${this.cats[i].toString} 
            <button class = "toCart">+</button><br>`;
        }
        elem.innerHTML = outStr;
    }

    showPetsAboveAverage(){
        const elem = document.querySelectorAll(".aboveAveragePrice");
        let outStr = `<h2>Pets with price above Average <h2>`;

        for (let i = 0; i < this.aboveAveragePrice.length; i++){
            outStr += `${this.aboveAveragePrice[i].toString} 
            <button class = "toCart">+</button><br>`;
        }
        elem.innerHTML = outStr;
    }
}