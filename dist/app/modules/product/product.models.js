import { Schema, model } from "mongoose";
const VariantSchema = new Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
const InventorySchmea = new Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    variants: {
        type: [VariantSchema],
        required: true,
    },
    inventory: InventorySchmea,
}, {
    timestamps: true,
});
export const Product = model("Products", productSchema);
