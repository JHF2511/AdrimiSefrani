import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productImg: { type: String, required: true },
    productName: { type: String, required: true },
    productDescription: { type: String, required: true },
    productStatus: { type: String, enum: ['Disponible', 'No disponible'], required: true },
    productPrice: { type: Number, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', require: true }
},{
    timestamps: true
});

export default mongoose.model("Producto", productSchema);