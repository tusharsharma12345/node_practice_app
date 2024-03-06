const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017", {
   dbName: "backend",
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
   console.log("Connect to MongoDB successfully");}).catch((err)=>{
    console.log(err);
   });
   const student = mongoose.Schema({
      name: String,
      father_name: String,
      address: String
   });
   const data = mongoose.model("Data",student);
   app.use(express.urlencoded({extended: true}));
//    const adder = async()=>{
//    const data = mongoose.model("Data",student);
// //   const ss = new data({
// //     name: "Tushar",
// //     father_name: "Satish",
// //     address: "Sikandrabad"
// //   });
// //   await ss.save();}
// //   adder();
app.post('/upload', async (req, res) => {
   await data.create({ name: req.body.name, father_name: req.body.father_name,address: req.body.address}).then(()=>{
      console.log("data saved");
   });
  
  
 });

const PORT = 3000;
app.listen(PORT,()=>{
  console.log("Server is working");
});