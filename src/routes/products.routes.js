import { Router } from 'express';
import { authRequired } from "../middlewares/validateToken.js";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

router.get('/products', authRequired, getProducts);

router.get('/products/:id', authRequired, getProduct);

router.post('/products', authRequired, createProduct);

router.delete('/products/:id', authRequired, deleteProduct);

router.put('/products/:id', authRequired, updateProduct);

export default router;