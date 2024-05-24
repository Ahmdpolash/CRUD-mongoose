var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ProductService } from "./product.services.js";
//inset product
const createPrduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        const result = yield ProductService.CreateProductIntoDb(product);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error,
        });
    }
});
//get all products
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.query;
        let result;
        if (name) {
            result = yield ProductService.searchByProductName(name);
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
        }
        else {
            result = yield ProductService.getProductFromDb();
            res.status(200).json({
                success: true,
                message: "Products retrived successfully!",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error,
        });
    }
});
//get single product
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield ProductService.getSingleProuductFromDb(id);
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
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error,
        });
    }
});
//update product
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const product = req.body;
        const result = yield ProductService.updateProductIntoDb(id, product);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
//delete product
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield ProductService.deleteProductFromDb(id);
        res.status(200).json({
            success: true,
            message: "Products deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong",
            error: error,
        });
    }
});
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
