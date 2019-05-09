export default class CartController {
    constructor(){
    
        this.eventListener = document.addEventListener("click", e => {
            if (e.target.className === "toCart"){
                //Добавляю в корзину
            }
        })

    }
}