const express = require("express");
const app = express();

// DataBase
const mongoose = require("mongoose")



// Metjods of requests

app.get('/',(req,res)=>{
    res.send("This is the GET Request");
})

app.post("/add",(req,res)=>{
    res.send("This is POST request");
})

app.put("/edit",(req,res)=>{
    res.send("This is PUT request");
})

app.delete("/delete",(req,res)=>{
    res.send("This is DELETE request");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    mongoose.connect('mongodb://localhost:27017/MyDatabase')
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    })
})