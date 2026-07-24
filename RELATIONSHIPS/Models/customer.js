// getting-started.js
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

const OrderSchema = new Schema({
  item: String,
  price: Number,
});


const customerSchema = new Schema({ 
    name: String,
    Orders: 
    [{
      
      type: Schema.Types.ObjectId, 
      ref: "Order"

    },
  ],

});


// customerSchema.pre("findOneAndDelete", async ()=> {
//   console.log("Pre Middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
  if(customer.Orders.length) {
    let res = await Order.deleteMany({_id: {$in: customer.Orders }});
    console.log(res);
  }
});



////////ADDING DATA////////////////////////

const Order = mongoose.model("Order", OrderSchema);
const Customer = mongoose.model("Customer", customerSchema);


// ////////////////FUNCTIONS///////////////////////
// const findCustomer = async () => {




  
//   let cust1 = new Customer({
//     name: "Rahul Kumar",
// });

// let Order1 = await Order.findOne({item: "Chips"});
// let Order2 = await Order.findOne({item: "Vadapav"});
 


// cust1.Orders.push(Order1);
// cust1.Orders.push(Order2);



// let result = await cust1.save();
// console.log(result);


// // let result = await Customer.find({});
// // console.log(result);


//  result = await Customer.find({}).populate("Orders");
// console.log(result[0]);

// };





/////////add///////


const addCust = async () => {


   let newCust = new Customer ({
    name:"Om Sairaj",
   });

let newOrder = new Order  ({
   item: "Burger",
   price: 250,
});


newCust.Orders.push(newOrder);


await newOrder.save();
await newCust.save();

console.log("added new customer");
   
};



////////delete////

const delCust = async () => {
  let data = await Customer.findByIdAndDelete('6a54f1f1b37dfade4e7b6c0a');
  console.log(data);
}

delCust();
// addCust();









// findCustomer();  







// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: "15" },
//     { item: "Chips", price: "200" },
//     { item: "Vadapav", price: "100" },
//   ]);
//   console.log(res);
// };

// addOrders();
























