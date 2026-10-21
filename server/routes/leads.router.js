import express from 'express';
import { validate } from '../validations/validate.js';
import { leadSchema } from '../validations/leads.schema.js';
import { asyncWrapper } from '../utils/asyncWrapper.js';
import { createLead, getAllLeads } from '../controllers/leads.ctrl.js';

const router = express.Router();

router.get('/', asyncWrapper(getAllLeads));
router.post('/', validate(leadSchema), asyncWrapper(createLead));

export default router;
