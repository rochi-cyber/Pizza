const mongoose=require('mongoose');
const express=require('express');
const mongoclient = require("mongodb").MongoClient;
const app=express();
const cors=require('cors');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())
 
mongoose.connect("mongodb://localhost:27017/Pizzeria", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });  
 
app.get("/Pizzabackend", (req, res) => {
    const url = "mongodb://localhost:27017";
    mongoclient.connect(url, (err, client) => {
      if (err) throw err;
      const db = client.db("Pizzeria");
      const collection = db.collection("Ingredients");
      collection.find().toArray((err,Ingredients) => {
        res.json(Ingredients);
        client.close();
      });
    });
  });


 
  
  app.get("/pizza", (req, res) => {
    const url = "mongodb://localhost:27017";
    mongoclient.connect(url, (err, client) => {
      if (err) throw err;
      const db = client.db("Pizzeria");
      const collection = db.collection("pizza");
      collection.find().toArray((err,pizza) => {
        res.json(pizza);
        client.close();
      });
    });
  });
app.listen(4000,()=>console.log("server started"))