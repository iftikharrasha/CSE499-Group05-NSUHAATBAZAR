const express =require('express');
const bodyParser =require('body-parser');
const dotenv= require('dotenv').config()
const cors= require('cors')
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sjlqb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
// app.get('/',(req,res) => {
//     res.send("hello,im working");
// });



const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db(`${process.env.DB_NAME}`).collection("hb_outlets");
  console.log("database connected");
  // perform actions on the collection object
//  const outlet1={
//     name: "The minus plan",
//     products:"cake",
//     description: "Hello Everyone",
// };

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
})


//read data

app.get('/outlets',(req,res)=>{
  collection.find({})
   .toArray((err,documents) =>{
     res.send(documents);
   })
 })

 app.get('/profile/:key',(req,res)=>{
  collection.find({key: req.params.key})
   .toArray((err,documents) =>{
     res.send(documents[0]);
   })
 })

// //sending to db
// app.post("/addProduct",(req,res)=>{
//   const product =req.body;
//   console.log(product);

//   collection.insertOne(product)
//   .then(result =>{
//       console.log("added successfully");
//       // res.send("success");
//       res.redirect('/');

//   });
// })

// //single product 
// app.get('/product/:id', (req,res)=>{
//   collection.find({_id:ObjectId(req.params.id)})
//   .toArray((err,documents) =>{
//     res.send(documents[0]);
//   })

// })

// //update
// app.patch('/update/:id',(req,res)=>{
//   collection.updateOne({_id: ObjectId(req.params.id)},
//   {
//     $set:{title:req.body.title, quantity:req.body.quantity}
//   })
//   .then (result => {
//     console.log(result);
//   })
// })

// const ObjectId= require('mongodb').ObjectId;
// app.delete('/delete/:id',(req,res) =>{
//   console.log(req.params.id);
//   collection.deleteOne({_id: ObjectId(req.params.id)})
//   .then(result =>{
//     // console.log(result);
//     res.send(result.deletedCount>0);
//   })
// })


//   client.close();
});



app.listen(4000, ()=>console.log('Listening to port 4000'));