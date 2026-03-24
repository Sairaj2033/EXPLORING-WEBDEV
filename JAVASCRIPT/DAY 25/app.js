// function hello()  { //6
//     console.log("inside hello "); //`7
//     console.log("hello"); //8
// }

// function demo() {    //3
//     console.log("calling hello funct"); //4
//     hello();                       //5
// }

// console.log("calling demo funct"); //1
// demo();                            //2 
// console.log("done!, bye");


function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() +one();
    console.log(ans);
}
three();