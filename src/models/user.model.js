import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    contraseña: {
        type: String,
        require: true
    }
},{
    timestamps: true
})

export default mongoose.model('Usuario', userSchema)