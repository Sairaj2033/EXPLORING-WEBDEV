// getting-started.js
const mongoose = require('mongoose');


main()
.then(() => {
    console.log("connection sucessfull!!")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}     
 
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
        maxlength:20,
    },
    author: {
        type: String,
    },
    price: {
        type:Number,
        min:[1,"enter a higher price price to low "],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category : {
     type: String,
     enum:["tech", "non-tech"],
    }
});

const Book =mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("69de2a2e692ed7c6118fb713", {price:0},{runValidators: true})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err.errors.price.properties.message);
});

// let book1 = new Book ({
//     title:"SAI",
//     author:"life of sai",
//     price: 3000,
// });
// book1.save().then(res => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })