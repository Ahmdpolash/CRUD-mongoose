import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route.js";
import { OrderRoute } from "./app/modules/order/order.route.js";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//routes
app.use("/api", ProductRoute);
app.use("/api/order", OrderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Assignment project is running");
});

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "Route is not found",
  });
});

export default app;
