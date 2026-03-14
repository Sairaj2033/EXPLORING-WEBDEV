   let name = "shraddha";
   let x = 5;

   let sum = function(a, b ) {
    return a+b;
    
     sum(1,2); //prints 3

   }

   let hello = function(){
    console.log("hello");
   }

   hello = function() {
    console.log("namaste"); ///hello updated to namaste
   }

   //--------------------------------------------------------------------

   function multipleGreet(func, count) {
    for(let i=1; i<=count; i++)  {
        func();
    }
   }
   let greet = function() {
    console.log("hello");
   }

   multipleGreet(greet, 2);