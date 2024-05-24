import express from "express";
import { productController } from "./product.controller.js";
const router = express.Router();

// insert product
router.post("/products", productController.createPrduct);

//get all products
router.get("/products", productController.getProduct);

//Retrieve a Specific Product by ID

router.get("/products/:id", productController.getSingleProduct);

//update product
router.put('/products/:id', productController.updateProduct)

//delete product
router.delete('/products/:id', productController.deleteProduct)

export const ProductRoute = router;
