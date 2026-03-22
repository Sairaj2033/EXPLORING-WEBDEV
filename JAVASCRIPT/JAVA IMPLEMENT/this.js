// this 
//when this is used in callback of event handler or something  it refers to that something


let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");



//LONG FORMAT OF THE LOGIC
// btn.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "cyan";
// })


// p.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "cyan";
// })


// h1.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "cyan";
// })


// h3.addEventListener("click",function() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "cyan";
// }) 


//SHORT ONE

function changeColor() {
     console.dir(this.innerText);
     this.style.backgroundColor = "cyan";
}

btn.addEventListener("click",changeColor);

p.addEventListener("click",changeColor);

h1.addEventListener("click",changeColor);

h3.addEventListener("click",changeColor);
