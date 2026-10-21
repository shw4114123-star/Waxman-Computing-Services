import { createLeadDAL, getAllLeadsDAL } from '../DAL/leads.dal.js';

export const createLead = async (req, res) => {
  const leadData = req.body;
  const newLead = await createLeadDAL(leadData);

  console.log(`[Lead Created] התקבלה פנייה חדשה מאת: ${newLead.name} (${newLead.phone})`);

  res.status(201).json({
    success: true,
    message: 'פנייתך התקבלה בהצלחה! מומחה מחשוב מטעמנו ייצור עמך קשר בהקדם.',
    data: newLead
  });
};

export const getAllLeads = async (_req, res) => {
  const allLeads = await getAllLeadsDAL();
  res.json({
    success: true,
    count: allLeads.length,
    data: allLeads
  });
};
