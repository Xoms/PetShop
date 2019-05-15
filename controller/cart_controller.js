import CartViewer from "/view/cartViewer.js";

export default class CartController {
    constructor(dbCntrl, startTaskController, petShopController){
        this.dbCntrl = dbCntrl;
        this.startTaskController = startTaskController;
        this.petShopController = petShopController;
        this.inCart = 0; //counter of items in cart
        
        }

    init(){
        this.cart = [];
        const cartButton = document.querySelector(".cart");
        const cartOk = document.querySelector("#ok");
        const cartCancel = document.querySelector("#cancel");
        
        cartOk.addEventListener("click", this.onOk.bind(this));
        cartCancel.addEventListener("click", this.onCancel.bind(this));

        cartButton.addEventListener("click", this.showCart.bind(this));               
        document.addEventListener("click", this.addListeners.bind(this));
        this.cartViewer = new CartViewer;
        

    }    
    //Listener for button "Cart"
    showCart(){
        console.log(this.cart);
        this.cartViewer.showCart(this.cart);

    }

    //Listeners for add/remove cart items
    addListeners(e){
        this.onToCartClick(e);
        this.onFromCartClick(e);
    }

    onCancel(){        
        this.cartViewer.closeCart();
    }

    onOk(){
        this.dbCntrl.updateDb(this.dbCntrl.pets);        
        this.inCart = 0;
        this.cart = [];
        this.cartViewer.closeCart();
        this.cartViewer.showInCartIndex(this.inCart);
    }

    onToCartClick(e) {
        let target = e.target;
        let prev;
        let itemId = '';

        if (target.classList.contains("toCart")){
            prev = target.parentElement.previousElementSibling;

            //find an id field of clicked item
            let idDiv = prev.querySelectorAll("div")[0];
            itemId = idDiv.textContent.slice(4); //"id: ....." 

            for (let i = 0; i < this.dbCntrl.pets.length; i++){                
                if (this.dbCntrl.pets[i].id == parseInt(itemId)){
                    
                    //add pet to cart array and remove it from db array

                    this.cart.push(this.dbCntrl.pets[i]);
                    this.dbCntrl.pets.splice(i, 1);
                    this.inCart++;                  
                }
            }
            this.redraw();
                          
        }
    }

    onFromCartClick(e){
        let target = e.target;
        let prev;
        let itemId = '';

        if (target.classList.contains("removeFromCart")){
            prev = target.parentElement.previousElementSibling;

            //find an id field of clicked item
            let idDiv = prev.querySelectorAll("div")[0];
            itemId = idDiv.textContent.slice(4); //"id: ....." 


            for (let i = 0; i < this.cart.length; i++){
                
                if (this.cart[i].id == parseInt(itemId)){                    
                    //add pet back to db and remove it from cart                   
                    this.dbCntrl.pets.push(this.cart[i]); 
                    this.cart.splice(i, 1)
                    this.inCart--;                  
                }
            }
            this.redraw();
            this.cartViewer.showCart(this.cart);              
        }
    }

    redraw(){
        //set new data
        
        this.dbCntrl.setPets(this.dbCntrl.pets);

        this.petShopController.cats = this.dbCntrl.cats;        
        this.petShopController.dogs = this.dbCntrl.dogs;
        this.petShopController.hamsters = this.dbCntrl.hamsters;

        this.startTaskController.pets = this.dbCntrl.pets;
        this.startTaskController.cats = this.dbCntrl.cats;

        //if something shown in showItems div (clicks by main menu)
        //redraw it too
        if (this.petShopController.currentTarget){
            this.petShopController.onTargetClick(this.petShopController.
                currentTarget);
        }       

        //and redraw all with new data
        this.petShopController.init();
        this.startTaskController.init();
        this.cartViewer.showInCartIndex(this.inCart);
        

    }

}