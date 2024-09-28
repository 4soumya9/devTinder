const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://namastedev:J5LVU1ogxMcivdPh@namastenode.x1b7g.mongodb.net/devTinder"
  );
};



module.exports= connectDB;
