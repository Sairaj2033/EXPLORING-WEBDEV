 // events are signals that something has occured (user input / actiions)


//  let btn = document.querySelector("button");   ///selects only single button
//  console.dir(btn); 
 
//  btn.onclick = function () {
//      console.log("button was clicked ") ;
//      alert("button is clicked ")
// };
// shows an msg on  webpage console that button was clicked \
// also shows allert that buttonn is cllicked 



let btn = document.querySelectorAll("button");//selects all buttons 
for (btn of btn) {
    btn.onclick = sayhello;  
    btn.onmouseenter = function(){
        console.log("you hovered over button");
    }
    console.dir(btn); 
}

function sayhello() {
    alert ("hello");  
} 

 