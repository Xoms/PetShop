import InitialQueryController from '/controller/initialQuery_controller.js';
import DbController from '/controller/db_controller.js';
import InitialViewer from '/view/initialViewer.js';
import PetShopView from '/view/petShopView.js';


class MainController {
    constructor(){
        this.dbCntrl = DbController;
        this.initQueryCntrl = InitialQueryController;
        this.initView = InitialViewer;
        this.petShopView = PetShopView;
    }

    init(){
        this.dbCntrl = new DbController;
        this.dbCntrl.getDb();
        this.initialQueryCntrl = new InitialQueryController(this.dbCntrl.pets);
        console.log(this.dbCntrl.pets); //ПУСТО БЛЯТЬ
        this.initView = new InitialViewer(this.dbCntrl.cats, 
            this.initialQueryCntrl.aboveAveragePrice,
            this.initialQueryCntrl.fluffyOrWhite);

    }
}

let mainController = new MainController();
mainController.init();