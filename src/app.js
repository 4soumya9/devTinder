// console.log("Starting a new project")

const express = require("express");

const app = express();

//request handler
// order is very much imp---Order matters

app.use("/user",(req,res) =>{
  res.send("HAAAA");
})

//This will only handle GET call to /user
app.get("/user", (req, res) => {
  res.send({ firstName: "Soumya", lastName: "Saini" });
});

app.post("/user", (req, res) => {
  // console.log("Save Data to the Database");
  //saving the data to DB
  res.send("Data successfully saved to the database");
});

app.delete("/user", (req,res) =>{
  res.send("Deleted");
})

// this will match all the http method API calls to /test
app.use("/test", (req, res) => {
  res.send("Hello from server");
});

// app.use("/hello",(req,res) =>{
//     res.send("Hello from server");
// })

// app.use("/",(req,res) =>{
//     res.send("Hello from dashboard");
// })

app.listen(3000, () => {
  console.log("Server is started 3000");
});
