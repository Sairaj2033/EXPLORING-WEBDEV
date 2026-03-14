 //SCOPE 
 // 
 let sum = 54;//its an global value 
 
 function calsum(a,b) {
    let sum = a+b;
 //console.log(sum);  if u used it here it will be printed but not outsid  
 }

 calsum(1, 2); 

 console.log(sum);// here 54 will print

 //------------------------------------------------------------
 
 //BLOCK FOR IF LOOPS 


 let age =25;
 if(age >=18) {
     let str ="adult";
     console.log(str);  //here it will print itself  but not otside of block
 }

  console.log(str); 

//-------------------------------------------------------------------

//WE CAN USE TH OUTER BLOCK TO INNER BLOCK BUT NOT VICE VERSA

function outerFunc() {
    let x = 5;
        y = 6;
        function innerFunc(){
            console.log(x);  // it will print 5 but if u have " x " in this inner block 
            // then and console.log() outside then it will show error

        }
        ineerFunc();
}
 
