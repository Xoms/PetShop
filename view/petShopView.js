
export default class PetShopView{
    constructor(catsBreed, dogsBreed){
        
        this.catsBreed = catsBreed;        
        this.dogsBreed = dogsBreed;
        this.breed;

        this.onBreedClick;


    }
    //displays pets
    showPetCards(cards){
        const elem = document.querySelector(".showItems > div");
        console.log (elem);
        elem.innerHTML = ``;
        let outStr = `<br>`;

        for (let i = 0; i < cards.length; i++){            
            outStr += `<div class = item>
                <div>${cards[i].family}; `

            if (cards[i].name) {
                outStr += `Name: ${cards[i].name}; `;
            }

            if (cards[i].breed) {
                outStr += `Breed: ${cards[i].breed}; `;
            }

            outStr += `Price: ${cards[i].price}; 
                Color: ${cards[i].color}; `;

            if (cards[i].isFluffy !== undefined) {
                outStr += `Fluffy: ${cards[i].isFluffy}; `
            }
            outStr += `</div>
                <div><button class = "toCart">+</button></div>
                </div>`;
        }
        elem.innerHTML = outStr;
    }  


    //display list of cats breeds
    showCatsBreed(){
        const elem = document.querySelector(".catsBreed");
        for (let i = 0; i<this.catsBreed.length; i++){
            let li = document.createElement('li');
            li.innerHTML = this.catsBreed[i];
            elem.appendChild(li);
        }
    }

    //display list of dogs breeds
    showDogsBreed(){
        const elem = document.querySelector(".dogsBreed");
        for (let i = 0; i<this.dogsBreed.length; i++){
            let li = document.createElement('li');
            li.innerHTML = this.dogsBreed[i];
            elem.appendChild(li);
        }
    }

    addListeners(){
        document.addEventListener ("click", this.onBreedClick);
    }

    init(){
        this.showCatsBreed();
        this.showDogsBreed();
        this.addListeners();
    }
    

    showHamsters(){

    }

}

