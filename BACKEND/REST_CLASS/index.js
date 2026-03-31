 
 const express = require("express");
 const app = express();
 const port = 8080; 
 const path = require("path");

app.use(express.urlencoded({ extended: true}));
 
 app.set("view engine", "ejs");
 app.set("views", path.join(__dirname, "views"));

 app.set(express.static(path.join(__dirname,"public")));

 app.get("/", (req,res) => {

    res.send("working well!!");
   
   
});

 let posts = [
    {
        username : "apnacollege",
        content : "i love coding",
    },
    {
        username : "sai",
        content: "i win",
    },

    {
        username : "om",
        content : "play",
    },
 ];




 app.get("/posts",(req,res) => {
   res.render("index", { posts });
});

 app.listen(port, () => {
    console.log("listening to port : 8080");
 });

