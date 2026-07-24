const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
};

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,  
  likes: Number,
  comments: Number,
  user: {
        type: Schema.Types.ObjectId,
        ref: "User"
  }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// const addData = async () => {

// ///////////////////////USERS////////////////////////////////////////////////////    
// //    let user1 = new User({ username: "sairaj_patill",email:"sai@gmail.com" });
     
//       let user = await User.findOne({username:"sairaj_patill"});

//      let post1 = new Post({ content: "Hey theree!", likes: 7});

// ////////////////////////POSTS////////////////////////////////
    
    
// //    let post2 = new Post({ content:"Whatsup!", likes: 8});

//     post1.user = user;
//     await post1.save();
// };
// addData();





///////////////////DELETE DATA/////////////////////////////////////

// const del = async() => {
//     await Post.findByIdAndDelete("6a5491132b8ab168b120cc3c");
//     await User.findByIdAndDelete("6a5491132b8ab168b120cc3b");
// }


// del()
// 
// ;


////////////////////////GETDATA/////////////////////

const getData = async() => {
  let result =  await Post.findOne({}).populate("user", "username");
  console.log(result);
};
getData();



