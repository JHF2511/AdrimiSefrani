import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import {createAccessToken} from '../libs/jwt.js'

export const register = async (req, res) => {
    const {email, contraseña, nombre} = req.body

    try {

        const contraseñaHash = await bcrypt.hash(contraseña, 10)

        const newUser = new User({
            nombre,
            email,
            contraseña: contraseñaHash,
        })
        console.log(newUser)
    
        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id})

        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            nombre: userSaved.nombre,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }

};

export const login = async (req, res) => {
    const {email, contraseña} = req.body

    try {

        const userFound = await User.findOne({email})

        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"})

        const isMatch = await bcrypt.compare(contraseña, userFound.contraseña);

        if (!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});

        const token = await createAccessToken({id: userFound._id})

        res.cookie('token', token);
        res.json({
            id: userFound._id,
            nombre: userFound.nombre,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        })
    } catch (error) {
        res.status(500).json({message: error.mesagge});
    }

};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
};

export const profile = (req, res) => {
    res.send('profile')
}