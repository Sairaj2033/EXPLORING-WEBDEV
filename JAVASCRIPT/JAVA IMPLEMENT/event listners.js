 // Element.addEventListners(event, callback) 
//  for single object u can add multiple  callbacks

let btns = document.querySelectorAll("button");

for(btn of btns) {

    // btn.addEventListener("click", sayhello);
    // btn.addEventListener("click", sayname);
    btn.addEventListener("dblclick", function () {  //dbl is double clicked 
        console.log("you double clicked");

    });

}

function sayhello() {
   alert("hello");
}

function sayname() {
    alert("apna college");
}

