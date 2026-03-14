 let student = {      //let can be "const"
   name: "sai",
   age:23,
   marks: 94.4,
   city: "delhi"
 };
 //we can also stoe all that
 //  in an array but literals gives me clarity
 const item = {
    price: 100,
    discount: 50,
    colors:["red","pink"]
 }; 

 const post = {
    username:"@sairajpatil",
    content:"images",
    likes:"49",
    reposts:"2",
    tags:["@apnacollege"]
 };

 //while calling with dot operator like post.reposts 
 //it will show undefided so u need to use like "post[reposts]"

 const obj = {
    1:"a",
    2:"b",
    true:"c",
    null:"d",
    undefined:"e",
 }

 //nested objects 
 const classinfo = {
     aman: {
        grade: "A+",
        city: "delhi"
     },
     shradha: {
         grade: "A",
         city: "pune"

     },
     karan: {
        grade: "O",
        city:"mumbai"
     }, 

 };


 //array of objects

 const classInfo = [
    {
        name: "aman",
        grade: "A+",
        city: "delhi"
    },
   {
        name: "saai",
        grade: "A+",
        city: "pune"
    },
     {
        name: "om",
        grade: "b+",
        city: "mumbai"
    },

 ]; 

 