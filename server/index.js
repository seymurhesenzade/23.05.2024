const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const Schema = mongoose.Schema;
const port = 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());

const DB_URL =
  "mongodb+srv://Seymur:azmp101@cluster0.ck1mfip.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const ColorlibSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
});

const ModelColorlib = mongoose.model("Colorlib", ColorlibSchema);

app.get("/products", async (req, res) => {
  try {
    const products = await ModelColorlib.find({});
    if (products.length > 0) {
      res.send({ message: "Success", data: products });
    } else {
      res.send({ message: "Not Found Data" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ModelColorlib.findById(id);
    if (product) {
      res.send({ messag: "Success", data: product });
    } else {
      res.send({ messaage: "Not Found Data" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ModelColorlib.findByIdAndDelete(id);
    if (product) {
      res.status(200).send({ message: "Deleted Successfully", data: product });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.post("/products", async (req, res) => {
  try {
    const newColorlib = new ModelColorlib({ ...req.body });
    await newColorlib.save();
    res.send({ message: "Success", data: newColorlib });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

mongoose.connect(DB_URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Link:http://localhost:${port}`);
  });
});
