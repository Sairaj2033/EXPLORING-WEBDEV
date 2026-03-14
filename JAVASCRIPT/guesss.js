  const max= prompt("ener the max no.");
  console.log(max);

  let random = Math.floor(Math.random()*max)+1; // will print random no.
 
  let guess = prompt("guess the no. ");

  while(true) {
        if(guess == "quit"){
            console.log("user quit");
            break;   
        }

        if(guess == random){
            console.log("u are right");
            break;
        } else if(guess < random) {
            console.log("ur guess was too small")
        }
           
  }
 