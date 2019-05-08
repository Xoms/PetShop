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
        let self = this;
        fetch(this.url)
        .then(function(response) {
            return response.json()
            .then(function(data) {
                self.setPets(data);                
            });
        });         
    } 


        // let xhr = new XMLHttpRequest();
        // xhr.open('GET', "model/db.json", true);
        // rawFile.overrideMimeType("application/json");
        // xhr.send();
        // if (xhr.status != 200) {
        //     console.log( xhr.status + ': ' + xhr.statusText ); 
        // } else {
        //     this.pets = JSON.parse(xhr.responseText);
        //     for (let i = 0; i < this.pets.length; i++){
        //         if (this.pets[i].family === 'Hamster') {
        //             this.hamsters.push(this.pets[i]);
        //         } else if (this.pets[i].family === 'Cat'){
        //             this.cats.push(this.pets[i]);
        //         } else if (this.pets[i].family === 'Dog'){
        //             this.dogs.push(this.pets[i]);
        //         }  
        //     }
        // }
    //}

}