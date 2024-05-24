import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route.js";

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//routes
app.use("/api", ProductRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Assignment project is running");
});

export default app;
