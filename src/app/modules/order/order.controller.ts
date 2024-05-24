import { Request, Response } from "express";
import { OrderService } from "./order.services.js";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body;
    const result = await OrderService.createOrderIntoDb(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as { email: string };
    let result;

    if (email) {
      result = await OrderService.getEmailByOrder(email);
      res.status(200).json({
        success: true,
        message: "orders fetched successfully for user email!",
        data: result,
      });
    } else {
      result = await OrderService.getOrderFromDb();
      res.status(200).json({
        success: true,
        message: "Order fetched successfully!",
        data: result,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const getEmailByOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as { email: string };
    const result = await OrderService.getEmailByOrder(email);
    res.status(200).json({
      success: true,
      message: "orders fetched successfully for user email!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const OrderController = {
  createOrder,
  getOrder,
  getEmailByOrder,
};
