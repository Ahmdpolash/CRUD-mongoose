var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { OrderService } from "./order.services.js";
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        const result = yield OrderService.createOrderIntoDb(order);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        let result;
        if (email) {
            result = yield OrderService.getEmailByOrder(email);
            res.status(200).json({
                success: true,
                message: "orders fetched successfully for user email!",
                data: result,
            });
        }
        else {
            result = yield OrderService.getOrderFromDb();
            res.status(200).json({
                success: true,
                message: "Order fetched successfully!",
                data: result,
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
const getEmailByOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.query;
        const result = yield OrderService.getEmailByOrder(email);
        res.status(200).json({
            success: true,
            message: "orders fetched successfully for user email!",
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
export const OrderController = {
    createOrder,
    getOrder,
    getEmailByOrder,
};
