 let url = "https://catfact.ninja/fact";

 fetch(url) 
 .then((response) => {
    console.log(response);
    return response.json();
    // console.log(response.json());
    // response.json().then((data) => {
    //     console.log(data);
    })
.then((data) => {
    console.log("data1 = ",data.fact);
    return fetch(url);
})
.then((response) => {
     return response.json();
})
.then((data2) => {
    console.log("data2 =",data2.fact);
})
 .catch((err) => {
    console.log("error is",err);
 });