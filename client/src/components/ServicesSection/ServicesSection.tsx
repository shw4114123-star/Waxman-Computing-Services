import { Network, Wrench, Server, ShieldCheck, Video, Check, ArrowLeft } from '../common/Icons';
import type { ServiceItem, ServiceCategory } from '../../types';
import './ServicesSection.css';

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService: (serviceSlug: string) => void;
}

const serviceIcons: Record<ServiceCategory, React.ReactNode> = {
  infrastructure: <Network size={28} />,
  repair_and_it: <Wrench size={28} />,
  equipment_sales: <Server size={28} />,
  security_and_cloud: <ShieldCheck size={28} />,
  cameras_low_voltage: <Video size={28} />,
};

export default function ServicesSection({ services, onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        {/* כותרת החלק */}
        <div className="section-header">
          <span className="section-badge">תחומי פעילות ומומחיות</span>
          <h2 className="section-title">פתרונות מחשוב מקצה לקצה לעסק שלך</h2>
          <p className="section-subtitle">
            אנו מספקים מענה הנדסי וטכנולוגי כולל – משלב תכנון התשתיות והחיווט, דרך אספקת חומרה, ועד תחזוקה שוטפת והגנת סייבר.
          </p>
        </div>

        {/* גריד 5 השירותים */}
        <div className="services-grid">
          {services.map((service, index) => {
            const icon = serviceIcons[service.slug] || <Server size={28} />;
            const isFeatured = index === 0;

            return (
              <div
                key={service.id || service.slug}
                className={`service-card ${isFeatured ? 'featured-card' : ''}`}
              >
                {isFeatured && (
                  <div className="featured-corner-badge">
                    הקמת עסקים ומשרדים
                  </div>
                )}

                <div>
                  <div className="service-icon-wrapper">
                    {icon}
                  </div>

                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.shortDescription}</p>

                  <div className="service-features-list">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="feature-item">
                        <div className="check-bullet">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.slug)}
                  className="btn-service-action"
                >
                  <span>{service.ctaText || 'אני מעוניין בשירות זה'}</span>
                  <ArrowLeft size={16} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
