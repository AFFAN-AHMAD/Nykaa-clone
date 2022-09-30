const { Schema, model } = require("mongoose");

const ProductsSchema = Schema({
    id: String,
    name: String,
    price: String,
    rating: String,
    product_type: String,
    brand: String,
    images: Array,
    description: String
});

const ProductsModel = model("products", ProductsSchema);
module.exports = ProductsModel