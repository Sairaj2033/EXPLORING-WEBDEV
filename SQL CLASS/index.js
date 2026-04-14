const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");


app.use(methodOverride("_method"));
app.use(express.urlencoded ({ extended:true }));
app.set("view  engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

const connection = mysql.createConnection ({
  host:'localhost',
  user:'root',
  database:'delta_app',
  password:'Sairaj@8563'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
    
  ];
};


// //INSERTING NEW DATA
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for (let i=1; i<=100; i++) { 
//   data.push(getRandomUser());
// }

// let users = [
//           ["123a","123_newusera","abca@gmail.com","abca"],
//           ["123b","123_newuserb","abcd@gmail.com","abcd"],

// ];

// let q = "SHOW TABLES";


//CONNECTION PART
// try {
//   connection.query(q, [data], (err, result) => {
//  if (err) throw err;
//   console.log(result);
//   // console.log(result.length)
//   // console.log(result[0]);
//   // console.log(result[1]);
// });
// } catch (err) {
//   console.log(err);
// }


// connection.end();

////////////HOME ROUTE //////////////////
app.get("/",(req,res) => {
  let q = `SELECT count(*) FROM user`;
  //CONNECTION PART
try {
  connection.query(q, (err, result) => {
 if (err) throw err;
  let count = result[0]["count(*)"];
  // console.log(result[0]["count(*)"]);
  res.render("home.ejs",{ count }); 
  // console.log(result.length)
  // console.log(result[0]);
  // console.log(result[1]);
});
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}

})

///////////////SHOW ROUTE /////////////////////
app.get("/user", (req,res) => {
  //res.send("sucess");
  let q =`SELECT * FROM user`;
try {
  connection.query(q, (err, users) => {
 if (err) throw err;
  //console.log(result);
  res.render("showuser.ejs", { users });
  // console.log(result[0]["count(*)"]);
  // res.send(result); 
  // console.log(result.length)
  // console.log(result[0]);
  // console.log(result[1]);
});
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}

});
   
///////////////EDIT ROUTE////////////////////////
 app.get("/user/:id/edit",(req,res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;

try {
  connection.query(q, (err, result) => {
 if (err) throw err;
 let user = result[0];
 res.render("edit.ejs", { user });
});
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}
});
 

 //////////////// UPDATE DB ROUTE  //////////////////////
app.patch("/user/:id", (req,res)=> {
     let { id } = req.params;
     let{password:formpass, username:newusername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;

  try {
  connection.query(q, (err, result) => {
 if (err) throw err;
  let user = result[0];
if(formpass != user.password) {
  res.send("wrong password");
} else {
  let q2 = `UPDATE user SET username='${newusername}' WHERE id='${id}'`;
  connection.query(q2, (err,result) => {
    if(err) throw err;
    res.redirect("/user");
  })
}

 
});
} catch (err) {
  console.log(err);
  res.send("some error in DB");
}
  
   
});
///////////////// HOMEWORK CREATE A NEW USER ////////////
app.get("/user/new",(req,res) => {
  res.render("create.ejs");
});
app.post("/user",(req,res)=> {
  let {username,email,password} =req.body;
  let id = faker.string.uuid();
  let q = "INSERT INTO user(id, username, email, password) VALUES(?,?,?,?)";

  connection.query(q, [id, username, email, password],(err,result) => {
    if(err) throw err;
    res.redirect("/user");
  });

});

///////////////DELETE///////////////////////////

 app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = "SELECT * FROM user WHERE id = ?";
    
    connection.query(q, [id], (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("delete.ejs", { user });
    });
});



 app.listen("3030", () => {
  console.log("server is listening to port 3030");
});



