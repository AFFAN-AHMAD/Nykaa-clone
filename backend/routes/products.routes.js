    const {Router} = require("express")

    const ProductsModel = require("../models/Products.Model")

    const productsRouter = Router()
    // const permutation = require("../permutation")
    const createQueries = require("../logic/map");
    const productList = require("../logic/productList");
    const brandList = require("../logic/brandList")
    productsRouter.post("/", (req, res) => {
        
    })

    productsRouter.get("/", async (req, res) => {
        const { brand, product_type } = req.headers
        const result = await ProductsModel.find()
        res.send(result)
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
    
        if (!brand&&!product_type) {
            const result = await ProductsModel.find()
            return res.send(result)
        } else if (!brand && product_type) {
            let products_type = product_type.split(",")
            const arr = productList(products_type);
               console.log(arr,"arr wihtout brand")
            const result = await ProductsModel.find({ $or:arr})
            return res.send(result)
        } else if (brand && !product_type) {
            let brands = brand.split(",");
            const arr = brandList(brands);
            console.log(arr,"arr without product")
             const result = await ProductsModel.find({ $or:arr})
            return res.send(result)
        }
        let brands = brand.split(",");
        let products_type = product_type.split(",")
        // console.log(brands)
        // console.log(products_type);
    
        const queryArray = createQueries(products_type,brands)
        console.log(queryArray,"with both");
    
        const result =await ProductsModel.find({$or:queryArray})
        res.send(result)
    })
    module.exports = productsRouter;

 // const brandArr = permutation(brands);
    // const categArr = permutation(products_type);
 // const queries = queryArray.map((ele, i) => {
    //     return console.log(ele["$and"])
    // })
    // console.log(brandArr);
    // console.log(queries)
    // const result = await ProductsModel.find({$or:[{product_type:"lip balm"},{product_type:"lip crayon"}]});
    // const result = await ProductsModel.find({ $or: [{ $and: [{ product_type: "lip crayon" }, { brand: "Kay Beauty" }] }, { $and: [{ product_type: "lip balm" }, { brand: "Earth Rhythm" }] }] })
    // const result = await ProductsModel.find({$or:[{$and:[{product_type:"lip crayon"},{brand:"Earth Rhythm"}]},{$and:[{product_type:"lip balm"},{brand:"Kay Beauty"}]}]})