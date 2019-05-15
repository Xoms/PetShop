import { Cat, Dog, Hamster } from "/model/pets_classes.js";

export default class DbController {    

    setPets(data){
        this.pets = [];
        this.cats = [];
        this.dogs = [];
        this.hamsters = [];
        //get arrays of pets by family
        for (let i = 0; i < data.length; i++){
            //hamsters
            if (data[i].family === 'Hamster') {
                this.hamsters.push(new Hamster(data[i].id,
                    data[i].color, data[i].price, 
                    data[i].isFluffy, data[i].family));
            //cats
            } else if (data[i].family === 'Cat'){
                this.cats.push(new Cat (data[i].id, data[i].color,
                    data[i].price, data[i].name, data[i].breed, 
                    data[i].isFluffy, data[i].family));
            //dogs 
            } else if (data[i].family === 'Dog'){
                this.dogs.push(new Dog(data[i].id, data[i].color,
                    data[i].price, data[i].name, data[i].breed, 
                    data[i].family));
            }
            //...and concatenate them all together            
        }
        this.pets = [].concat(this.hamsters, this.cats, this.dogs); 
        console.log(this.cats);        
    }

    updateDb(data){
        fetch("/model/db.json", 
            {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    }

    init(){        
        
        
        let promise = fetch("/model/db.json")
        .then(response =>{
            return response.json();
        })        
        return promise;              
    }
}