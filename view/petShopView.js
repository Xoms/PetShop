
export default class PetShopView{
    constructor(catsBreed, dogsBreed){
        
        this.catsBreed = catsBreed;        
        this.dogsBreed = dogsBreed;

        this.onBreedClick;
    }

    //display list of cats breeds
    showCatsBreed(){
        const elem = document.querySelector(".catsBreed");
        elem.innerHTML = '';
        for (let i = 0; i<this.catsBreed.length; i++){
            let li = document.createElement('li');
            li.innerHTML = this.catsBreed[i];
            elem.appendChild(li);
        }
    }

    //display list of dogs breeds
    showDogsBreed(){
        const elem = document.querySelector(".dogsBreed");
        elem.innerHTML = '';
        for (let i = 0; i<this.dogsBreed.length; i++){
            let li = document.createElement('li');
            li.innerHTML = this.dogsBreed[i];
            elem.appendChild(li);
        }
    }

    //displays pets
    showPetCards(cards){
        const elem = document.querySelector(".showItems > div");        
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




    addListeners(){
        document.addEventListener ("click", this.onBreedClick);
    }


    init(){
        this.showCatsBreed();
        this.showDogsBreed();
        this.addListeners();
    }

}

