let gameSeq=[];
let userSeq=[];

let btns =["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if(started == false){  //the game is started value is false 
         console.log("game is started");
        started =true;  //the value or condition becomes true
        

        levelUp();
    
       } 
        
}); 

function gameFlash(btn) {
  btn.classList.add("flash");
setTimeout(function () {
    btn.classList.remove("flash");
},250);   
 
}


function userFlash(btn) {
  btn.classList.add("userflash");
setTimeout(function () {
    btn.classList.remove("userflash");
},250);   
 
}
    function levelUp() {
         userSeq =[];
           level++;
          h2.innerText = `Level ${level}`;
          

          let randinx =Math.floor(Math.random() * 3);
          let randcolor = btns[randinx];
          let randbtn= document.querySelector(`.${randcolor}`);
          
          //to check which vaues 
        //   console.log(randinx);2
        //   console.log(randcolor);
        //   console.log(randbtn);

        gameSeq.push(randcolor);
        console.log(gameSeq);
          //will choose random button
          gameFlash(randbtn);

    } 

    function checkans(idx) {
      //  console.log("curr level : ", level);
     

      if(userSeq[idx]=== gameSeq[idx]) {
        // console.log("same value ");
        if(userSeq.length == gameSeq.length){  
           setTimeout(levelUp,1000)
        }
      } else {
           h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br>Press any key to start.`;
           document.querySelector("body").style.backgroundColor = "red";
           setTimeout(function () {
                       document.querySelector("body").style.backgroundColor = "white";
           }, 150);
           reset();
      }
    
    
    }

function btnpress() {
    console.log(this);
    // console.log("btn was pressed");
    //console.log(this); 
    let btn = this ;
   // btnFlash(btn);
   userFlash(btn);

   
   usercolor = btn.getAttribute("id") ;
//    console.log(usercolor);
    userSeq.push(usercolor );

    checkans(userSeq.length-1);

}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns ) {
    btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0 ;
}