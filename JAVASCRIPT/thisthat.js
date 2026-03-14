 const student = {
    name: "sai",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        let avg = (this.eng + this.math + this.phy)/ 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
 }

// printed console
//  student.getAvg();
// VM584 thisthat.js:9 sai got avg marks = 95
// undefined  