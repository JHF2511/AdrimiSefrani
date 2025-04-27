import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://admin:Pure2025JHF@cluster0.thx17ue.mongodb.net/");
        console.log(">>> DB conectada")
    } catch (error) {
        console.log(error)
    }
};