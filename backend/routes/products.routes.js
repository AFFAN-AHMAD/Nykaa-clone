const {Router} = require("express")

const ProductsModel = require("../models/Products.Model")

const productsRouter = Router()

productsRouter.post("/", (req, res) => {
    
})

productsRouter.get("/", async (req, res) => {
    const { brand, product_type } = req.headers
    const result = await ProductsModel.aggregate([{ $group: { _id: "$product_type" } }])
    // res.write(brand);
    // res.send([product_type,brand])
    const cat = result.map((ele) => ele._id)
    res.send(cat)
});

// to create list of categories available
productsRouter.get("/category", async (req, res) => {
    const result = await ProductsModel.aggregate([{ $group: { _id: "$product_type" } }]);
    const cat = result.map((ele) => ele._id)
    res.status(200).send(cat);
});

// to create list of brand available
productsRouter.get("/brand", async (req, res) => {
    const result = await ProductsModel.aggregate([{ $group: { _id: "$brand" } }]);
    const brand = result.map((ele) => ele._id)
    res.status(200).send(brand);
})
productsRouter.get("/filter", async (req, res) => {
    const result = await ProductsModel.find({$or:[{product_type:"lip balm"},{product_type:"lip crayon"}]});
    res.send(result)
})
module.exports = productsRouter;