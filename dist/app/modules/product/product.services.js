var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product } from "./product.models.js";
//insert product
const CreateProductIntoDb = (ProductsData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product.create(ProductsData);
    return result;
});
//get proudct
const getProductFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product.find();
    return result;
});
//get single product
const getSingleProuductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product.findById(id);
    // const result = await Product.findOne({_id});
    return result;
});
//update product
const updateProductIntoDb = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProduct = {
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        tags: product.tags,
        variants: product.variants,
        inventory: product.inventory,
    };
    const result = yield Product.findByIdAndUpdate(id, updatedProduct);
    // const result = await Product.updateOne({ _id: id }, updatedProduct);
    return result;
});
//delete
const deleteProductFromDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product.findByIdAndDelete(id);
    // const result = await Product.deleteOne({ _id: id });
    return result;
});
//search by product name
const searchByProductName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Product.find({ name: { $regex: name, $options: "i" } });
    return result;
});
export const ProductService = {
    CreateProductIntoDb,
    getProductFromDb,
    getSingleProuductFromDb,
    updateProductIntoDb,
    deleteProductFromDb,
    searchByProductName,
};
