import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please provide a username"],
            unique: true,
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            required: [true, "Please provide email"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
        },
        img: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken: String,
        verifyTokenExpiry: Date,
    },
    { timestamps: true }
);

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stock: {
            type: Number,
            required: true,
            min: 0,
        },
        img: {
            type: String,
        },
        color: {
            type: String,
        },
        size: {
            type: String,
        },
    },
    { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
    mongoose.models.Product || mongoose.model("Product", productSchema);