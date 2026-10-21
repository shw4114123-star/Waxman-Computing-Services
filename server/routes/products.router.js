import express from 'express';
import { asyncWrapper } from '../utils/asyncWrapper.js';
import { getAllProducts, getProductById } from '../controllers/products.ctrl.js';

const router = express.Router();

router.get('/', asyncWrapper(getAllProducts));
router.get('/:id', asyncWrapper(getProductById));

export default router;
