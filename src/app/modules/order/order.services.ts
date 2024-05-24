import { Product } from "../product/product.models.js";
import { TOrder } from "./order.interface.js";
import { Orders } from "./order.models.js";

const createOrderIntoDb = async (order: TOrder) => {
  const product = await Product.findById(order.productId);
  if (!product) {
    return { message: "Order not found" };
  }

  let availableProductQuantity = product.inventory?.quantity;

  if (order.quantity > availableProductQuantity) {
    return { message: "Insufficient stock" };
  }

  const result = await Orders.create(order);
  return result;
};

const getOrderFromDb = async () => {
  const result = await Orders.find();
  return result;
};

const getEmailByOrder = async (email: string) => {
  const result = await Orders.findOne({ email: email });
  return result;
};

export const OrderService = {
  createOrderIntoDb,
  getOrderFromDb,
  getEmailByOrder,
};
