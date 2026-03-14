  for(let i=1; i<=10; i++){
    console.log(i);
  }

  
  //ODD  15 TO 1 NOS
  for(let i=15; i>=1; i=i-2){
    console.log(i)
  }
///-->15,13,11,9,7,5,3,1
  // ODD NO'S 1 TO 15
  for(let i=1; i<=15; i=i+2){
    console.log(i);
  }
 //--> 1,3,5,7,9,11,13,15
  //EVEN NO. TO 1 TO 1000
  for(let i=2; i<=1000; i=i+2){
    console.log(i)
  }

  //infinit loops

for(let i=1; i>=0; i++){
 console.log(i)
}

//table of 5

for(i=5; i<=50; i=i+5){
    console.log(i)
}


//NESTED LOOP
for(let i=1; i<=3; I++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }   
    }

    //while loops with guesing game (number important )
    const favMovie ="avatar";

    let guess =prompt("guess my favourite movie");

    while((guess != favMovie) && (guess != "quit")){
        guess = prompt("wrong guess. please try again");
    }

    if(guess == favMovie){
    console.log("congrats!!");
}else{
    console.log("you quit")
}
