import type {
  ServiceItem,
  ProductItem,
  ProductCategory,
  LeadPayload,
  LeadResponse,
  SupportTicketPayload,
  TicketResponse,
  ApiResponse
} from '../types';

const API_BASE = '/api';

export async function fetchServices(): Promise<ServiceItem[]> {
  try {
    const res = await fetch(`${API_BASE}/services`);
    if (!res.ok) {
      throw new Error(`שגיאת שרת (${res.status}) בשליפת שירותים`);
    }
    const result: ApiResponse<ServiceItem[]> = await res.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
}

export async function fetchProducts(category?: ProductCategory): Promise<ProductItem[]> {
  try {
    const url = category && category !== ('all' as unknown as ProductCategory)
      ? `${API_BASE}/products?category=${encodeURIComponent(category)}`
      : `${API_BASE}/products`;

    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`שגיאת שרת (${res.status}) בשליפת מוצרים`);
    }
    const result: ApiResponse<ProductItem[]> = await res.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function submitLead(payload: LeadPayload): Promise<LeadResponse> {
  const res = await fetch(`${API_BASE}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'אירעה שגיאה בעת שליחת הפנייה. נא לנסות שנית.');
  }

  return data as LeadResponse;
}

export async function submitSupportTicket(payload: SupportTicketPayload): Promise<TicketResponse> {
  const res = await fetch(`${API_BASE}/tickets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'אירעה שגיאה בעת פתיחת קריאת השירות. נא לנסות שנית.');
  }

  return data as TicketResponse;
}
