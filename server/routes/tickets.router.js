import express from 'express';
import { validate } from '../validations/validate.js';
import { ticketSchema } from '../validations/tickets.schema.js';
import { asyncWrapper } from '../utils/asyncWrapper.js';
import { createTicket, getAllTickets, getTicketByNumber } from '../controllers/tickets.ctrl.js';

const router = express.Router();

router.get('/', asyncWrapper(getAllTickets));
router.get('/:ticketNumber', asyncWrapper(getTicketByNumber));
router.post('/', validate(ticketSchema), asyncWrapper(createTicket));

export default router;
