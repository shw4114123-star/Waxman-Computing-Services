/**
 * שכבת גישה לנתוני לידים ופניות (Leads DAL)
 */

const leads = [];

export async function createLeadDAL(leadData) {
  const newLead = {
    id: `lead-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name: leadData.name.trim(),
    phone: leadData.phone.trim(),
    businessName: leadData.businessName ? leadData.businessName.trim() : '',
    workstationsCount: leadData.workstationsCount ? Number(leadData.workstationsCount) : null,
    interestedIn: Array.isArray(leadData.interestedIn) ? leadData.interestedIn : [],
    notes: leadData.notes ? leadData.notes.trim() : '',
    createdAt: new Date().toISOString()
  };

  leads.unshift(newLead);
  return newLead;
}

export async function getAllLeadsDAL() {
  return leads;
}
