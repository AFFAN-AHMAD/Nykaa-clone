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
   
    let brands = brand.split(",");
    let products_type = product_type.split(",")
     console.log(brands)
    console.log(products_type);
    // const brandArr = permutation(brands);
    // const categArr = permutation(products_type);
    const queryArray = createQueries(products_type,brands)
    console.log(queryArray);
    // const queries = queryArray.map((ele, i) => {
    //     return console.log(ele["$and"])
    // })
    // console.log(brandArr);
    // console.log(queries)
    // const result = await ProductsModel.find({$or:[{product_type:"lip balm"},{product_type:"lip crayon"}]});
    // const result = await ProductsModel.find({ $or: [{ $and: [{ product_type: "lip crayon" }, { brand: "Kay Beauty" }] }, { $and: [{ product_type: "lip balm" }, { brand: "Earth Rhythm" }] }] })
    // const result = await ProductsModel.find({$or:[{$and:[{product_type:"lip crayon"},{brand:"Earth Rhythm"}]},{$and:[{product_type:"lip balm"},{brand:"Kay Beauty"}]}]})
    const result =await ProductsModel.find({$or:queryArray})
    res.send(result)
})
module.exports = productsRouter;