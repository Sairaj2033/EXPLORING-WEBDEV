// function PersonMaker(name,age) {
//     const person = {
//         name : name,
//         age : age,
//         talk(){
//         console.log(`hi my  name is ${this.name}`);
//      },
//     };
//     return person;
// }
//----------------
//CONSTRUCTORS - dosent return anything & start with capital letter
// function Person(name,age) { 
//    this.name = name;
//    this.age = age;
// }

// const { takeCoverage } = require("node:v8");

// Person.prototype.talk = function () {
//     console.log(`hi, my name is ${name}`);
// }

//CONSTRUCTOR CLASS
// class Person {
//     constructor(name,age) {
//         this.name = name ;
//         this.age = age ;

//     }
//     talk() {
//         console.log(`hi, my name is ${this.name}`)
//     }
// } 
// let p1 = new Person("adam",25);
// let p2 = new Person("eve",25);

//----------------------

class Person {
    constructor(name,age) {
        console.log("person class constructor ");
        this.name = name ;
        this.age = age ;

    }
    talk() {
        console.log(`hi, my name is ${this.name}`);
    }
} 



class Student extends Person {
    constructor(name,age,marks) {
        console.log("person class constructor ");
        super(name,age);//parent class connstrutor is being called 
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name,age,subject ) {
        super(name,age);//parent class connstrutor is being called 
        this.subject = subject;
    }
}


// let p1 = new Person("adam",25);
// let p2 = new Person("eve",25);


