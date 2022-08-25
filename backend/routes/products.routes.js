const {Router} = require("express")

const ProductsModel = require("../models/Products.Model")

const productsRouter = Router()
// const permutation = require("../permutation")
const createQueries = require("../map")
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
    let brand = req.headers.brand;
    let product_type = req.headers.product_type
    // console.log(typeof(brand))
    console.log(product_type);
    let brands = brand.split(",");
    let products_type = product_type.split(",")
    // const brandArr = permutation(brands);
    // const categArr = permutation(products_type);
    const queryArray = createQueries(brands, products_type)
    console.log(queryArray)
    // console.log(brandArr);
    // console.log(categArr)
    // const result = await ProductsModel.find({$or:[{product_type:"lip balm"},{product_type:"lip crayon"}]});
    // const result = await ProductsModel.find({ $or: [{ $and: [{ product_type: "lip crayon" }, { brand: "Kay Beauty" }] }, { $and: [{ product_type: "lip balm" }, { brand: "Earth Rhythm" }] }] })
    // const result = await ProductsModel.find({$or:[{$and:[{product_type:"lip crayon"},{brand:"Earth Rhythm"}]},{$and:[{product_type:"lip balm"},{brand:"Kay Beauty"}]}]})
    const result =await ProductsModel.find({$or:[
        { '$and': [{ product_type: 'lip balm' }, { brand: 'Earth Rhythm'}] }
]})
    res.send(result)
})
module.exports = productsRouter;