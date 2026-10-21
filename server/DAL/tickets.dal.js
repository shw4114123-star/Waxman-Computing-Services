/**
 * שכבת גישה לקריאות שירות ומעבדה (Tickets DAL)
 */

const tickets = [];
let ticketSequence = 1000;

export async function createTicketDAL(ticketData) {
  ticketSequence += 1;
  const ticketNumber = `TKT-${ticketSequence}`;

  const newTicket = {
    id: `ticket-${Date.now()}`,
    ticketNumber,
    clientName: ticketData.clientName.trim(),
    phone: ticketData.phone.trim(),
    issueType: ticketData.issueType || 'remote_support',
    urgency: ticketData.urgency || 'normal',
    description: ticketData.description.trim(),
    status: 'open',
    createdAt: new Date().toISOString()
  };

  tickets.unshift(newTicket);
  return newTicket;
}

export async function getAllTicketsDAL() {
  return tickets;
}

export async function getTicketByNumberDAL(ticketNumber) {
  return tickets.find((t) => t.ticketNumber === ticketNumber) || null;
}
