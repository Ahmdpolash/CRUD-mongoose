import { Schema, model } from "mongoose";
const OrderSchema = new Schema({
    email: {
        type: String,
        required: [true, "email is must be provided"],
        //   unique: true,
    },
    productId: {
        type: String,
        required: true,
        //   unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
export const Orders = model("Order", OrderSchema);
