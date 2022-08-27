const {Schema, model} = require("mongoose");

const CartSchema = new Schema({
    name : String,
    gram : String,
    image : String,
    price : String,
    quantity : String,
    id : String
});

const CartModel = model("cartItems", CartSchema);

module.exports = CartModel;