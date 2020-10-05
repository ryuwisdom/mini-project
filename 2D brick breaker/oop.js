// animal OOP 설계


class Animal {
    constructor(name, location, eyes, feed){
        this.name = name;
        this.location = location;
        this.eyes = eyes;
        this.feed = feed;
    }
    eat() {
        console.log(`${this.name} like ${this.feed}.`);
    }
}

    class LandAnimals extends Animal{
        constructor(name, location, eyes, feed, legs, ears, nose){
            super(name, location, eyes, feed);
            this.legs = legs;
            this.ears = ears;
            this.nose = nose;
        }
        walk() {
            console.log(`${this.name} can walk.`);
        }

        eat() {
            super.eat(); //override
            console.log(`${this.name} also eat meat.`);
        }
        
    }






class SkyAnimals{
    constructor(egg, legs, wings){
        this.egg = egg;
        this.legs = legs;
        this.wings = wings;
    }
    fly() {
        console.log("I can fly.");
    }
    
}
class SeaAnimals{
    constructor(tail, fin, wave){
        this.tail = tail;
        this.fin = fin;
        this.wave = wave;
    }
    swim() {
        console.log("I can swim.");
    }
    
}

const pig = new LandAnimals("pig","land",2,"grass",2,2,1)
pig.name;
pig.location;
pig.walk();
pig.eat();

