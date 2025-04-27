import Product from "../models/product.model.js"; // Modelo importado correctamente

export const getProducts = async (req, res) => {
    const products = await Product.find({
        Usuario: req.Usuario.id
    }).populate('Usuario')
    res.json(products)
};

export const createProduct = async (req, res) => {
    const {productImg, productName, productDescription, productStatus, productPrice} = req.body

    console.log(req.usuario)

    const newProduct = new Product({
        productImg,
        productName,
        productDescription,
        productStatus,
        productPrice,
        usuario: req.user.id
    })
    const savedProduct = await newProduct.save()
    res.json(savedProduct);
};

export const getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({message: "Producto no encontrado"})
    res.json(product)
};


export const deleteProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({message: "Producto no encontrado"})
    return res.sendStatus(204);
};

export const updateProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if (!product) return res.status(404).json({message: "Producto no encontrado"})
    res.json(product)
};