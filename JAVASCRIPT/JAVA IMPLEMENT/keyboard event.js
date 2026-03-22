  //  let btn = document.querySelector("button");

//  btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button was clicked ");
//  });

//  btn.addEventListener("dblclick", function(event) {
//     console.log(event);
//     console.log("button was clicked ");
//  });  // prints the prop of mouse 


let inp = document.querySelector("input");
inp.addEventListener("keydown",function(event) {
   // console.log("key = ",event.key);


    console.log("code = ",event.code); ///arrow up down left right
    if(event.code == "ArrowUp") {
        console.log("char moves forward");
    }
        else if(event.code == "ArrowDown") {
            console.log("char moves back");
         }
        

         else if(event.code == "ArrowRight") {
            console.log("char moves right");
        }
        
         else if(event.code == "ArrowLeft") {
            console.log("char moves left");
        }

   //  console.log("key was pressed") 


    console.log(event);
});