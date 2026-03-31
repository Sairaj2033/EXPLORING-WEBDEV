const express = require("express");
const app = express();

const port = 8080;

app.use(express.urlencoded({extended:true})); // for url format data // this line printed the user and password in body to terminal
//if json data use below one. 
app.use(express.json());  

app.get("/register", (req,res) => {
    let {user, password} = req.query;   //remember this query in url ? data from get travels thro post so we can scess by req.query
    res.send(`std get response ,${user}`);
})

app.post("/register",(req,res) => {
    let {user, password} = req.body;
    // console.log(req.body);
    res.send(`std post response, ${user}`)
})

app.listen(port,() => {
    console.log(`listening to port ${port}`);
})    