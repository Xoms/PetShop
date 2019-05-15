import StartTaskController from '/controller/start_task_controller.js';
import DbController from '/controller/db_controller.js';
import PetShopController from '/controller/pet_shop_controller.js';
import CartController from '/controller/cart_controller.js';

class MainController {
    init(){
        
        this.dbCntrl = new DbController;        
         
        this.dbCntrl.init()//recieved a promisse from dbController
        .then(data => {
            this.dbCntrl.setPets(data);             
        })
        .then( () => { //launch calculations of start task
            this.startTaskController = 
                new StartTaskController(this.dbCntrl.pets,
                    this.dbCntrl.cats);
            this.startTaskController.init();

        //initialisation of Main Menu
            this.petShopController = new PetShopController(this.dbCntrl.cats,
                this.dbCntrl.dogs, this.dbCntrl.hamsters);
            this.petShopController.init();

        //init of cart
            this.cartController = new CartController(this.dbCntrl, 
                this.startTaskController, this.petShopController);
            this.cartController.init();          
        })
        .catch (error => {
            console.error(error);
        });
    }   

}


let mainController = new MainController();
mainController.init();