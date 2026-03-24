////js is single threaded
// setTimeout(() => {
//     console.log("apna college");
// }, 5000);
// console.log("hello.....");

h1 = document.querySelector("h1");


// setTimeout(() => {
//     h1.style.color = "red";
// },1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// },2000);

// setTimeout(()=> {
//     h1.style.color = "green";
// },3000);

//-------------------------------------------//
//SHORTCUT WAY

function changeColor(color,delay,nextColorChange) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        let num = Math.floor(Math.random()*5)+1;
        if(num > 3) {
            reject("promise rejected");
        }
    h1.style.color = color;
    if(nextColorChange) nextColorChange();
    resolve("color changed!");
   },delay );

    });
}

    async function demo() {
       try {
        await changeColor("red", 1000);
        await changeColor("orange", 1000);
        await changeColor("green", 1000);
        await changeColor("blue", 1000);
       }
       catch(err){
        console.log("error is",err,"tryagain");
        
       }

        let a=5;
        console.log("new number = ", a+3);
        confirm 

    }
//    setTimeout(() => {
//     h1.style.color = color;
//     if(nextColorChange) nextColorChange();
//    },delay );


// changeColor("red",1000)
// .then(()=> {
//     console.log("red color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=> {
//     console.log("orange color was completed");
//     return changeColor("green",1000);
// })
// .then(()=> {
//     console.log("green color was completed");
//     return changeColor("blue",1000);
// })
// .then(()=> {
//     console.log("blue color was completed");
//     return changeColor("orange",1000);
// })
// .then(()=> {
//     console.log("orange color was completed");
//     return changeColor("grey",1000);
// })
// .then(()=> {
//     console.log("grey color was completed");
   
// });





// changeColor("red",1000, () => {
//     changeColor("orange",1000, () => {
//         changeColor("green",1000 , () => {
//         changeColor("yellow",1000, () => {
//             changeColor("blue",1000);
// //         });
//          });
//     });
// });

// CALLBACK NESTING == CALL BACK HELL
