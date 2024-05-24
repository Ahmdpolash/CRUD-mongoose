import express from "express";
import { OrderController } from "./order.controller.js";
const router = express.Router();
router.post("/", OrderController.createOrder);
router.get("/", OrderController.getOrder);
export const OrderRoute = router;
