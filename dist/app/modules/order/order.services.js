var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product } from "../product/product.models.js";
import { Orders } from "./order.models.js";
const createOrderIntoDb = (order) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const product = yield Product.findById(order.productId);
    if (!product) {
        return { message: "Order not found" };
    }
    let availableProductQuantity = (_a = product.inventory) === null || _a === void 0 ? void 0 : _a.quantity;
    if (order.quantity > availableProductQuantity) {
        return { message: "Insufficient stock" };
    }
    const result = yield Orders.create(order);
    return result;
});
const getOrderFromDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Orders.find();
    return result;
});
const getEmailByOrder = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Orders.findOne({ email: email });
    return result;
});
export const OrderService = {
    createOrderIntoDb,
    getOrderFromDb,
    getEmailByOrder,
};
