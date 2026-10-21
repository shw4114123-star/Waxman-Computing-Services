import { createTicketDAL, getAllTicketsDAL, getTicketByNumberDAL } from '../DAL/tickets.dal.js';
import { createError } from '../utils/errorHandler.js';

export const createTicket = async (req, res) => {
  const ticketData = req.body;
  const newTicket = await createTicketDAL(ticketData);

  console.log(`[Ticket Created] נפתחה קריאה מס' ${newTicket.ticketNumber} עבור: ${newTicket.clientName}`);

  res.status(201).json({
    success: true,
    message: `קריאה מס' ${newTicket.ticketNumber} נפתחה בהצלחה במערכת`,
    ticketNumber: newTicket.ticketNumber,
    data: newTicket
  });
};

export const getAllTickets = async (_req, res) => {
  const tickets = await getAllTicketsDAL();
  res.json({
    success: true,
    count: tickets.length,
    data: tickets
  });
};

export const getTicketByNumber = async (req, res) => {
  const { ticketNumber } = req.params;
  const ticket = await getTicketByNumberDAL(ticketNumber);
  if (!ticket) {
    throw createError(`קריאת שירות מס' ${ticketNumber} לא נמצאה`, 404);
  }
  res.json({
    success: true,
    data: ticket
  });
};
