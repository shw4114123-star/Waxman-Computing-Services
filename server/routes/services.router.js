import express from 'express';
import { asyncWrapper } from '../utils/asyncWrapper.js';
import { getAllServices, getServiceBySlug } from '../controllers/services.ctrl.js';

const router = express.Router();

router.get('/', asyncWrapper(getAllServices));
router.get('/:slug', asyncWrapper(getServiceBySlug));

export default router;
