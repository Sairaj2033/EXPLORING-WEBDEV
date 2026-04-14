// getting-started.js
const mongoose = require('mongoose');

main()
.then(() => {
    console.log("connection sucessfull!!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}     

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User= mongoose.model("User",userSchema);
const Employee= mongoose.model("Employee",userSchema);

User.findOneAndDelete({name:"Tony"}).then((res) =>  {
            console.log(res);
}).catch((err) => {
    console.log(err);
});



// User.findByIdAndUpdate("69de0da595a84ec1b4e5884c",{age: 1})
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });



// User.findById("69de0da595a84ec1b4e5884f")
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
    
// });



// const user2 = new User({
//     name:"bob",
//     email:"bob@gamil.com",
//     age:"22"
// })

// user2.save()
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });

// User.insertMany([
//      {name:"Tony", email:"tony@gmail.com", age:50},
//      {name:"Tony", email:"tony@gmail.com", age:50},
//       {name:"Tony", email:"tony@gmail.com", age:50}
// ])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// });