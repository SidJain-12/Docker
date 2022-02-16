const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const DB_NAME = "tutorial"

// routes
// var testAPIRouter = require("./routes/testAPI");
// var UserRouter = require("./routes/Users");
var BuyerRouter=require("./routes/Buyeruser");
var VendorRouter=require("./routes/Vendoruser");
var productRouter = require("./routes/product");
// var orderRouter=require("./routes/order")


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://db:27017/', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
// app.use("/testAPI", testAPIRouter);
// app.use("/user", UserRouter);
app.use("/user", BuyerRouter);
app.use("/vendor",VendorRouter);
app.use("/product", productRouter);
// app.use("/order", orderRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
