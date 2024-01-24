import express, { json } from "express";
import cors from "cors";

const app = express();
const port = 3000;

app.use(json());
app.use(cors());

import mongoose from "mongoose";
const { Schema } = mongoose;

const myproducts = new Schema({
  title: String, // String is shorthand for {type: String}
  price: Number,
  info: String,
  image: String
});

const Products = mongoose.model("myproducts2", myproducts);

app.get("/products", async (req, res) => {
  try {
    const product = await Products.find({});
    res.send(product);
  } catch (error) {
    res.status(503).send(error);
  }
});

app.post("/products", async (req, res) => {
  try {
    const product = new Products(req.body);
    await product.save();
    res.send(product);
  } catch (error) {
    res.status(503).send(error);
  }
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Products.findById(id);
    res.send(product);
  } catch (error) {
    res.status(503).send(error);
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findByIdAndDelete(id);
    res.send(product);
  } catch (error) {
    res.status(503).send(error);
  }
});

mongoose.connect(
  "mongodb+srv://EmrahFerecov:Emrah1907@cluster0.dctkgzn.mongodb.net/"
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
