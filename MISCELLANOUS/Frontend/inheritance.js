 class mammal {
    constructor(name) {
        this.name= "name";
        this.type = "warm blodded";
    }
    eat() {
        console.log("i am eating ");
    }
 }

//----

 class Dog extends mammal {
    constructor(name) {
     super(name);
    }


    bark() {
        console.log("woof");
    }


 }

 //---

 class cat extends Mammal {

    constructor(name) {
         super(name);
    }
   
    meow() {
        console.log("woof..");
    }

 }