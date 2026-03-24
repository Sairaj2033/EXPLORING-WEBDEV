// function saveDb(data, success, faliure) {
//     let internetSpeed = Math.floor(Math.random() * 10) +1;
//     if(internetSpeed>4) {
//       //  console.log("ur data was saved : ", data);
//       success();
    
//     } else {
//        // console.log("weak connection.data not saved "); 
//        faliure();

//        }
// }
  
// saveDb(
//   "apna college",
//    ()=> {
//     console.log(" success: ur data was saved : " );
//     savetoDb(
//       "hello world",
//     () => {
//       console.log("sucess2:data2 saved");
//       savetoDb(
//         "shradha",
//         () =>{
//         console.log("sucess3:data3 saved");
//       }, 
//       ()=>{
//          console.log("failure3 : weak conneection")
//       }
//     );
//    },
 

//     () => {
//       console.log("faliure2:weak connection");
//      }
//     );
// }, 
// ()=> {
                     
//       console.log("faliure: weak connection.data not saved "); 
    
// });

function savetoDb(data) {
  return new Promise((resolve,reject) => {
    let internetSpeed = Math.floor(Math.random()* 10) + 1;
    if(internetSpeed > 4){
      resolve("success: data was saved");
    } else {
      reject("faliure: weak connectioon");
    }
  });
}


// let request = 
savetoDb("apna college")

// console.log(request);
 .then((result) => {
  console.log(" data1 was saved ");
  console.log("result of promise",result);
  return savetoDb("helloworld");
 })
  .then((result) => {
    console.log("data2 was saved");
    console.log("result of promise",result); 
   return savetoDb("shradha")
  })
  .then((result) => {
    console.log("data 3 saved ");
    console.log("result of promise",result);
  })

  .catch((error) => {
  console.log("data was saved .promose was rejected");
  console.log("result  of promise" , error);
 });
