 let i=1;
 while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++
 }
 console.log("we used to to break at 3");

 //prints
 //1
 //2
 //3


 //loop with arrays
 let fruits =["mango", "apple", "banana", "lithchi", "orange"];

 for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
 }

 // 0 mango
 // 1 apple
 // 2 banana
 // 3 litchi
 // 4 orange