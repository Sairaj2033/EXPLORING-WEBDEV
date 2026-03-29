const express = require("express");
const app = express();
const path = require("path"); 

const port = 8080;

app.set("view engine", "ejs" );
app.set("views", path.join(__dirname, "/views"));
 
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/ig/:username", (req, res) => {
    const followers = ["sairajpati", "om" , "tanmay", "amogh"]
    let { username } = req.params;
    res.render("instagram.ejs",{username, followers});
});

app.get("/instagram/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
     if(data) {
        res.render("instagram2.ejs",{data});
} else {
    res.render("error.ejs");
}
    
});


app.get("/rolldice", (req, res) => {
    let diceval= Math.floor(Math.random()*6+1) ; 
    res.render("rolldice.ejs",{diceval});
});

app.get("/rolldice6", (req, res) => {
   let dicev =  Math.floor(Math.random()*6+1) ;  
   res.render("roll6.ejs",{dicev});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});