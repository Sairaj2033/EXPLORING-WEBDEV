 let samllImages = document.getElementsByClassName("oldImg");

 for(let i=0; i<samllImages.length; i++){
     samllImages[i].src = "image.png";
    console.log(`value of img no ${i} is changed.`); //shoes all 3 old img attrributes
 } 
 ///-------console-------------//
//  net::ERR_FILE_NOT_FOUNDUnderstand this error
// app.js:5 value of img no 0 is changed.
// app.js:5 value of img no 1 is changed.
// app.js:5 value of img no 2 is changed




///////-////////////////----------------------///

// QUERY SELECTOR

console.dir(document.querySelector("h1")); 
//console
// all attributes of h1



console.dir(document.querySelector("div a"));
//console
//all anchor tags 
//boxlink (attributes) 

console.dir(document.querySelectorAll("div a"));
//console
//NodeList(4)
// 0: a.boxLink1: a.boxLink2: a.boxLink3: a.boxLinklength: 4[[Prototype]]: NodeList