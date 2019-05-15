//Shows start task (show all Cats, show Pets with price above average, 
//show fluffy or white pets)

export default class StartTaskViewer{
    constructor(cats, fluffyOrWhite, aboveAveragePrice){
        this.cats = cats;
        this.fluffyOrWhite = fluffyOrWhite;
        this.aboveAveragePrice = aboveAveragePrice;

    }

    showPetCards(cards, elem){
        console.log(cards);
        
        elem.innerHTML = ``;
        let outStr = ``;

        for (let i = 0; i < cards.length; i++){            
            outStr += `<div class = item>
                <div>`;
            outStr+= `<div>id: ${cards[i].id}; </div> 
                <div>family: ${cards[i].family};</div> `

            if (cards[i].name) {
                outStr += `<div>name: ${cards[i].name};</div>`;
            }

            if (cards[i].breed) {
                outStr += `<div>breed: ${cards[i].breed};</div>`;
            }

            outStr += `<div>price: ${cards[i].price};</div> 
                <div>color: ${cards[i].color};</div>`;

            if (cards[i].isFluffy !== undefined) {
                outStr += `<div>isFluffy: ${cards[i].isFluffy};</div>`
            }
            outStr += `</div>
                <div><button class = "toCart">+</button></div>
                </div>`;
        }
        elem.innerHTML = outStr;
    }

    

    render(){
        const elemFluffy = document.querySelector(".fluffyOrWhite");
        const elemCats = document.querySelectorAll(".cats")[0];
        const elemAboveAverage = document.querySelector(".aboveAveragePrice");
        this.showPetCards(this.fluffyOrWhite, elemFluffy);
        this.showPetCards(this.cats, elemCats);
        this.showPetCards(this.aboveAveragePrice, elemAboveAverage);
        
    }
}