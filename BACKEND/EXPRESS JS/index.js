const express = require("express");
const app = express();

console.dir(app);

let port = 3000;

// app.listen(port, () => {
//     console.log(`app is listening on port server started  ${port}`);
// });

// app.use((req,res) => {
//     console.log(req);
//         console.log("request recived "); 
//         let html = "<h1>fruits</h1> <ul>apple</ul> <ul>mango</ul></h1>"  
//         res.send (html) ;  
// });

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);

});

app.get("/",(req, res) => {
    res.send("you conntacted rooth path ");
});
// app.get("/apple",(req, res) => {
//     res.send("you conntacted apple     path ");
// });
// app.get("/mango",(req, res) => {
//     res.send("you conntacted mangopath ");
// });
// app.use((req,  res) => {
//     res.status(404).send("this path does not exit");
// });
 
app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    let {username, id} = req.params;
    let htmlStr = `<h1>Welcome ${username}</h1>`
    res.send(htmlStr);
});      


app.get("/search",(req,res) => {
    // console.log(req.query);
    // res.send(" not found ");

    let {q} = req.query;
    if(!q) {
        res.send("<h1>not found</h1>");
    }
     res.send(`<h1>these are the search results:${q}</h1>`);
});
