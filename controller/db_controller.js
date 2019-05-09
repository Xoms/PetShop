export default class DbController {
    constructor(){
        this.url = "/model/db.json";
        this.pets = [];
        this.cats = [];
        this.dogs = [];
        this.hamsters = [];
    }

    setPets(data){
        this.pets = data;
        for (let i = 0; i < this.pets.length; i++){
            if (this.pets[i].family === 'Hamster') {
                this.hamsters.push(this.pets[i]);
            } else if (this.pets[i].family === 'Cat'){
                this.cats.push(this.pets[i]);
            } else if (this.pets[i].family === 'Dog'){
                this.dogs.push(this.pets[i]);
            }  
        }
        console.log (this.pets);
    }

    getDb(){
        
        let promise = fetch(this.url)
        .then(response =>{
            return response.json();
        })        
        return promise;              
    }
}