const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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



let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let data = [];
for (let i=1; i<=100; i++) {
  data.push(getRandomUser());
}

// let users = [
//           ["123a","123_newusera","abca@gmail.com","abca"],
//           ["123b","123_newuserb","abcd@gmail.com","abcd"],

// ];

// let q = "SHOW TABLES";


//CONNECTION PART
try {
  connection.query(q, [data], (err, result) => {
 if (err) throw err;
  console.log(result);
  // console.log(result.length)
  // console.log(result[0]);
  // console.log(result[1]);
});
} catch (err) {
  console.log(err);
}


connection.end();
   




