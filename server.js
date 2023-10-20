const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

//Connecting to MongoDB
mongoose
  .connect("mongodb://localhost/lubu", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((error) => console.error("Error connecting to MongoDb", error));

//JSON Parser
app.use(bodyParser.json());

//API Routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
