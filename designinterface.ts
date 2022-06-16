interface Dog {
    id? : number;
    name: string;
    age: number;
    description: string;
}

//The key difference between interfaces and classes 
//in any programming language is that classes allow 
//you to define implementation details. 
//Interfaces solely define how data is structured

class DogRecord implements Dog {
    //Properties
    id: number;
    name: string;
    age: number;
    description: string;

    //Constrctors
    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }

    static load(id:number): DogRecord {
        //code to load dog from database
        return dog;
    }

    save() {
        //code to save dog to database
    }

}