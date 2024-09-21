// console.log("Starting a new project")

const express = require("express");

const app = express();

//request handler

app.use("/",(req,res) =>{
    res.send("Hello from dashboard");
})

app.use("/test",(req,res) =>{
    res.send("Hello from server");
})

app.use("/hello",(req,res) =>{
    res.send("Hello from server");
})

app.listen(3000,()=>{
    console.log("Server is started 3000");
});
