const { Router } = require("express");
const CartModel = require("../models/Cart.model");

const cartRouter = Router();

cartRouter.get("/", async (req, res) => {
  const data = await CartModel.find();
  res.send(data);
});

cartRouter.get("/:id", async (req, res) => {
  const {id} = req.params;
  const data = await CartModel.find({id});
  res.send(data);
})

cartRouter.post("/", async (req, res) => {
  const newItem = await new CartModel(req.body);
  await newItem.save((err, data) => {
    if (err) {
      res
        .status(500)
        .send({ message: "Error occured while adding cart item to Database", data });
    } else {
      res
        .status(201)
        .send({ message: "Item added to cart successfully", data });
    }
  });
});
cartRouter.delete("/", async (req, res) => {
	await CartModel.remove();
	res.send("Deleted successfully");
});
cartRouter.delete("/:itemid", async (req, res) => {
  const id = req.params.itemid;
  await CartModel.deleteOne({ id });
  res.send("Deleted successfully");
});

cartRouter.put("/:itemid", async (req, res) => {
  const id = req.params.itemid;
  let { quantity } = req.body;
  await CartModel.updateOne({ id }, { $set: { quantity } });
  res.send("Updated successfully successfully");
});

module.exports = cartRouter;


	
