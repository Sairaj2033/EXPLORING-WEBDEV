function printName(name) {
    console.log("Name")
}
printName(shradha);
//
// shradha will be stored in printName.
// ad it will print as shradha

// -------------------------------------------------------------

function printInfo(name,age) {
    console.log(`${name}'s age is ${age}.`);

}

prinInfo("shraddha",23);
prinInfo("rajat",23);
prinInfo("karan");

//----------------------------------------------------------------

function name(a, b) {
    console.log(a+b);
    
}

sum(1,2);//prints 3
sum(1,2);//priints 9
sum(1,2);//prints 15

//---------------------------------------------------------------
 function sum(a,b) {
    console.log(a+b);
 }

 function calAvg(a,b,c) {
    let avg =(a+b+c)/3;
    console.log(avg);
 }

 function printTable(n) {
    for(let i=n; i<=n*10; i+=n) {
   console.log(i);
    }
 }

 //----------------------------------------------------------------

 function sum(a,b) {
    return a+b;

 }

//  console.log(sum(3, 4));
console.log(sum(1,2),3); // will print 6

//------------------------------------------------------------

function  isAdult(age) {
    if(age >= 18) {
        return "adult";
    }else{
        return "not adult";
    }
}

// print 
//if we write
// isAdult(13);  ----> not adult
// isAdult(19);---->adult
//

