const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
// require("dotenv").config();
const port = process.env.PORT||8080
const cartRouter = require("./routes/cart.routes");
const productsRouter = require("./routes/products.routes");
const connection = require("./db");
const UserRouter = require('./routes/User.routes');
const app = express();




app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
    console.log("hello world")
    res.send("hi")
})

app.use("/products",productsRouter)
app.use("/",UserRouter)
app.use("/cart", cartRouter);


app.listen(port, async() => {
    try {
      await connection
        console.log(`server is running on http://localhost:${port}`);
        
    } catch {
        console.log("error while connecting")
    }


}) 