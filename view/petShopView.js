
export default class PetShopView{
    constructor(catsBreed, dogsBreed){
        
        this.catsBreed = catsBreed;        
        this.dogsBreed = dogsBreed;

        this.onBreedClick = null;


    }

    showCatsBreed(){
        const elem = document.querySelector(".catsBreed > ul");
        for (let i = 0; i<this.catsBreed.length; i++){
            let li = document.createElement('li');
            li.innerHTML = this.catsBreed[i];
            elem.appendChild(li);
        }
    }    

    showDogsBreed(){
        const elem = document.querySelector(".dogsBreed > ul");
        for (let i = 0; i<this.dogsBreed.length; i++){
            let li = document.createElement('li');
            li.innerHTML = this.dogsBreed[i];
            elem.appendChild(li);
        }
    }

    addListeners(){
        document.addEventListener("click", onBreedClick);
    }

    init(){
        this.showCatsBreed();
        this.showDogsBreed();
        addListeners();
    }
    

    showHamsters(){

    }

}

