export type ServiceCategory =
  | 'infrastructure'
  | 'repair_and_it'
  | 'equipment_sales'
  | 'security_and_cloud'
  | 'cameras_low_voltage';

export interface ServiceItem {
  id: string;
  slug: ServiceCategory;
  title: string;
  shortDescription: string;
  features: string[];
  ctaText: string;
}

export type ProductCategory = 'bundles' | 'computers' | 'networking' | 'cameras';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  specs: string[];
  priceLabel: string;
  includesInstallation: boolean;
  badge?: string;
}

export interface LeadPayload {
  name: string;
  phone: string;
  businessName?: string;
  workstationsCount?: number;
  interestedIn: string[];
  notes?: string;
}

export interface SupportTicketPayload {
  clientName: string;
  phone: string;
  issueType: 'remote_support' | 'lab_repair' | 'network_issue' | 'cameras';
  urgency: 'normal' | 'high' | 'critical';
  description: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    phone: string;
    businessName?: string;
    workstationsCount?: number;
    interestedIn: string[];
    notes?: string;
    createdAt: string;
  };
}

export interface TicketResponse {
  success: boolean;
  message: string;
  ticketNumber: string;
  data: {
    id: string;
    ticketNumber: string;
    clientName: string;
    phone: string;
    issueType: string;
    urgency: string;
    description: string;
    status: string;
    createdAt: string;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  count?: number;
  message?: string;
}
