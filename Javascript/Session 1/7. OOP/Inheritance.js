import Animal from "../6. Classes/animal.js";

class Dog extends Animal{

    constructor(tail){
       super('Dog','Woof');
       this.tail = tail;
    }

    async wagTail(){
        if(this.tail){
            console.log(`The dog wags its tail`)
        }
    }
}

const dog = new Dog(false);
dog.speak();
dog.wagTail();