export default class CartViewer{

    
    showCover() {
      let coverDiv = document.createElement('div');
      coverDiv.id = 'cover-div';
      document.body.appendChild(coverDiv);
    }

    hideCover() {
      document.body.removeChild(document.querySelector('#cover-div'));
    }

    closeCart(){
        let cartContent = document.querySelector('.cartContent');
        cartContent.style.display = 'none';
        this.hideCover();
    }


    showInCartIndex(inCart){
        let index = document.querySelector(".cart > span") 
        index.innerHTML = inCart;
    }

    showCart(cards){
        let cartContent = document.querySelector('.cartContent');
        if(!cards) {
            cartContent.querySelector('div').innerHTML = '';
            return;
        }

        this.showCover();                
        cartContent.style.display = 'block';     

        
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
                <div><button class = "removeFromCart">-</button></div>
                </div>`;
        }
        cartContent.querySelector('div').innerHTML = outStr;
    }
    
}