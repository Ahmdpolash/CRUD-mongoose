import express from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route.js";
import { OrderRoute } from "./app/modules/order/order.route.js";
const app = express();
//parser
app.use(express.json());
app.use(cors());
//routes
app.use("/api", ProductRoute);
app.use("/api/order", OrderRoute);
app.get("/", (req, res) => {
    res.send("Assignment project is running");
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
export default app;
