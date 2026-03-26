class Animal{
    constructor(name){
        this.name=name;
        console.log("Animal created");
    }
    eat(){
        console.log("Animal is eating");
    }
    jump(){
        console.log("Animal is jumping");
    }
}

// let a=new Animal("bunny");
// console.log(a);

class Lion extends Animal{
    constructor(name, sound){
        super(name);
        this.name=name;
        this.sound=sound;
        console.log("Lion created");
    }
}

let l=new Lion("Simba", "Roar");console.log(l);