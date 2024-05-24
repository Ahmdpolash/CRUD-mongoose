import express from "express";
import cors from "cors";
import { ProductRoute } from "./app/modules/product/product.route.js";
const app = express();
//parser
app.use(express.json());
app.use(cors());
//routes
app.use("/api", ProductRoute);
app.get("/", (req, res) => {
    res.send("Assignment project is running");
});
export default app;
