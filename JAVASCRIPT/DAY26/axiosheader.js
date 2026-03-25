 const url = "https://icanhazdadjoke.com/";

 async function getjokes()  {
    try {
        const cofig  = {
        headers:{ Accept:"application/json"}
        };
        let res= await axios.get(url, config);
        console.log(res.data);
     } catch(e){
       console.log(e);
 
     } 

    
 }