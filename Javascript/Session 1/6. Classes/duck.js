import Animal from "./animal.js";

class Duck extends Animal{
    constructor(wet){
        super(`Duck`,`Quack`);
        this.wet = wet;    
    }

    isDuckWet(){
        const output = this.wet ? 'The duck is wet' : 'The duck is not wet';
        console.log(output);
    }
}

const duck = new Duck(false);

duck.speak();
duck.isDuckWet();
