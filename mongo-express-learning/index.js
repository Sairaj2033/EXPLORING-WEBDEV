const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));

main()
.then(() => {
    console.log("connection sucessfull")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

 
}


//INDEX ROUTE 
app.get("/chats", async (req, res) => {
 let chats = await Chat.find();
 console.log(chats);
 res.render("index.ejs",{chats});

});

//NEW ROUTE 
app.get("/chats/new", (req,res) => {
    res.render("new.ejs");
      
})

//CREATE ROUTE 
app.post("/chats", (req,res) => {
    let{from, to, msg} = req.body;
    let newChat =new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat
    .save()
    .then((res)=> {
        console.log("chat was saved");
    }).catch((err) => {
        console.log(err);
    });
    
    res.redirect("/chats" ) ;
});

//EDIT ROUTE 
app.get("/chats/:id/edit", (req,res) => {
    res.render("edit.ejs");
})


app.get("/",(req,res) => {
    res.send("root is working ");
  
});

let chat1 = new Chat({
    from:"neha",
    to:"priya",
    msg:"send me ur sheets",
    created_at: new Date(),  
});

chat1.save().then((res) => {
    console.log(res);
})



app.listen(8080, () => {
    console.log("server is listening on port 8080");

});