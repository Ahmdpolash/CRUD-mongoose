import { Request, Response } from "express";
import { ProductService } from "./product.services.js";

//inset product
const createPrduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    const result = await ProductService.CreateProductIntoDb(product);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

//get all products
const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.getProductFromDb();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

//get single product

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.getSingleProuductFromDb(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

//update product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const product = req.body;
    const result = await ProductService.updateProductIntoDb(id, product);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//delete product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductService.deleteProductFromDb(id);

    res.status(200).json({
      success: true,
      message: "Products deleted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};

export const productController = {
  createPrduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
