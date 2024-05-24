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
    const { name } = req.query as { name?: string };

    let result;
    if (name) {
      result = await ProductService.searchByProductName(name);
      if (!result.length) {
        return res.status(404).json({
          success: false,
          message: `No products found matching the search term '${name}'`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Products matching search term '${name}' fetched successfully`,
        data: result,
      });
    } else {
      result = await ProductService.getProductFromDb();
      res.status(200).json({
        success: true,
        message: "Products retrived successfully!",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
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

//search by product name

// const searchProduct = async (req: Request, res: Response) => {
//   try {
//     const { name } = req.query as { name?: string };

//     if (!name) {
//       return res.status(400).json({
//         success: false,
//         message: "Search term is required",
//       });
//     }

//     const result = await ProductService.searchByProductName(name);

//     if (!result.length) {
//       return res.status(404).json({
//         success: false,
//         message: `No products found matching the search term '${name}'`,
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: `Products matching search term '${name}' fetched successfully`,
//       data: result,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: error,
//     });
//   }
// };

export const productController = {
  createPrduct,
  getProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
