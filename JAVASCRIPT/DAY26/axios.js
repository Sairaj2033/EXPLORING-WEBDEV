let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     //console.log("button was clicked ");
//   let fact = await getFacts();
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
    
// try {
//  let res =await axios.get(url);
//  return  res.data.fact; 
  
// } catch (e) {
//     console.log("errror is",e);
//     return "no fact found";
// }

// } 

let url2 = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener("click", async () => { 
    let link = await getimage();
    console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    //console.log("button was clicked ");
//   let fact = await getFacts();
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
});


async function getimage() {
    
try {
 let res =await axios.get(url2);
 return res.data.message;
 //return  res.data.fact; 
 } catch (e) {
    console.log("errror is",e);
    return "no image found";
}

} 