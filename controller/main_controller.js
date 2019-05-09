import InitialQueryController from '/controller/initialQuery_controller.js';
import DbController from '/controller/db_controller.js';
import MenuController from '/controller/mainMenuController.js';
import CartController from '/controller/cart_controller.js';

import InitialViewer from '/view/initialViewer.js';
import PetShopView from '/view/petShopView.js';
import CartViewer from '/view/cartViewer.js';


class MainController {
    constructor(){
        this.dbCntrl;
        this.initialQueryCntrl;
        this.menuController;
        this.cartController;

        this.initialViewer;
        this.petShopView;
    }    



    init(){
        
        this.dbCntrl = new DbController;        
         
        this.dbCntrl.getDb()//recieved a promisse from dbController
        .then(data => {
            this.dbCntrl.setPets(data);             
        })
        .then( () => { //launch calculations of start task
            this.initialQueryCntrl = 
                new InitialQueryController(this.dbCntrl.pets);
            this.initialQueryCntrl.run(); 
        })
        .then( () => { //show start task
            this.initialViewer = new InitialViewer(this.dbCntrl.cats, 
            this.initialQueryCntrl.fluffyOrWhite,
            this.initialQueryCntrl.aboveAveragePrice);
            this.initialViewer.run();
        })
        .then ( () => { //initialisation of mainMenu
            this.menuController = new MenuController(this.dbCntrl.cats,
                this.dbCntrl.dogs, this.dbCntrl.hamsters);
            this.menuController.init();
            
        })
        .catch (error => {
            console.error(error);
        });
    }   

}


let mainController = new MainController();
mainController.init();