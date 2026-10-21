import { getAllProductsDAL, getProductByIdDAL } from '../DAL/products.dal.js';
import { createError } from '../utils/errorHandler.js';

export const getAllProducts = async (req, res) => {
  const { category } = req.query;
  const products = await getAllProductsDAL(category);
  res.json({
    success: true,
    category: category || 'all',
    count: products.length,
    data: products
  });
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdDAL(id);
  if (!product) {
    throw createError('המוצר המבוקש לא נמצא בקטלוג', 404);
  }
  res.json({
    success: true,
    data: product
  });
};
