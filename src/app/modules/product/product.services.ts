import { TProduct } from "./product.interface.js";
import { Product } from "./product.models.js";

//insert product
const CreateProductIntoDb = async (ProductsData: TProduct) => {
  const result = await Product.create(ProductsData);
  return result;
};

//get proudct
const getProductFromDb = async () => {
  const result = await Product.find();
  return result;
};

//get single product

const getSingleProuductFromDb = async (id: string) => {
  const result = await Product.findById(id);
  // const result = await Product.findOne({_id});
  return result;
};

//update product

const updateProductIntoDb = async (id: string, product: TProduct) => {
  const updatedProduct = {
    name: product.name,
    description: product.description,
    price: product.price,
    category: product.category,
    tags: product.tags,
    variants: product.variants,
    inventory: product.inventory,
  };
  const result = await Product.findByIdAndUpdate(id, updatedProduct);
  // const result = await Product.updateOne({ _id: id }, updatedProduct);
  return result;
};

//delete

const deleteProductFromDb = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  // const result = await Product.deleteOne({ _id: id });
  return result;
};

export const ProductService = {
  CreateProductIntoDb,
  getProductFromDb,
  getSingleProuductFromDb,
  updateProductIntoDb,
  deleteProductFromDb,
};
