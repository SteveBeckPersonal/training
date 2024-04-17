class Animal{

    constructor (name, noise){
        this.name = name;
        this.sound = noise;
    }

    age;


    speak(){
        console.log(`${this.name} makes a ${this.sound}`)
    }

    setAge(age){
        this.age = age;
        
    }

    logAge(){
        console.log(this.age);
    }
}

export default Animal;


const dog = new Animal(`Dog`,`Woof`);
