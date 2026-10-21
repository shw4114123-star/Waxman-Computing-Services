import { getAllServicesDAL, getServiceBySlugDAL } from '../DAL/services.dal.js';
import { createError } from '../utils/errorHandler.js';

export const getAllServices = async (_req, res) => {
  const services = await getAllServicesDAL();
  res.json({
    success: true,
    count: services.length,
    data: services
  });
};

export const getServiceBySlug = async (req, res) => {
  const { slug } = req.params;
  const service = await getServiceBySlugDAL(slug);
  if (!service) {
    throw createError('השירות המבוקש לא נמצא', 404);
  }
  res.json({
    success: true,
    data: service
  });
};
