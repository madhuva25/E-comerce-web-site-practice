

import express from "express";
import { cartget, deleteCart, getCart } from '../controler/cartControl.js';

const router = express.Router();

// Example route with user ID parameter
router.post('/creat/:userId', cartget);
router.get('/cart/:id', getCart);
router.delete('/cart/:id', deleteCart);

export default router;
