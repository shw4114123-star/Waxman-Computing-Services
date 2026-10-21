import { Calculator, Headset, CheckCircle2, ShieldCheck, Zap, ArrowLeft } from '../common/Icons';
import './Hero.css';

interface HeroProps {
  onOpenTicket: () => void;
  onOpenCalculator: () => void;
}

export default function Hero({ onOpenTicket, onOpenCalculator }: HeroProps) {
  return (
    <section className="hero-section circuit-pattern">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />

      <div className="hero-container">
        
        {/* תגית אזור פעילות */}
        <div className="hero-badge">
          <span className="pulse-dot" />
          <span>שירותי מחשוב, IT ותשתיות תקשורת בשרון ובמרכז</span>
        </div>

        {/* הנפשת לוגו ממותגת במרכז העמוד במקום הכיתוב הסטטי */}
        <div className="hero-animation-wrapper">
          <div className="hero-animation-card">
            <img
              src="/logo-animated.gif"
              alt="וקסמן שירותי מיחשוב – לעסקים שחושבים על עצמם"
              className="hero-animation-img"
            />
          </div>
          <h1 className="hero-seo-title">
            וקסמן שירותי מיחשוב ותשתיות – לעסקים שחושבים על עצמם
          </h1>
        </div>

        {/* תיאור תמציתי */}
        <p className="hero-description">
          תכנון והקמת תשתיות רשת, אבטחת מידע וגיבוי ענן, תמיכת IT מנוהלת, מצלמות אבטחה ומעבדת תיקונים מתקדמת – פתרון מקיף ומקצועי תחת קורת גג אחת.
        </p>

        {/* כפתורי CTA */}
        <div className="hero-cta-group">
          <button onClick={onOpenCalculator} className="btn-primary-hero">
            <Calculator size={20} />
            <span>קבל הצעת מחיר למשרד</span>
            <ArrowLeft size={16} />
          </button>

          <button onClick={onOpenTicket} className="btn-secondary-hero">
            <Headset size={20} color="var(--color-brand-blue-deep)" />
            <span>פתיחת קריאת שירות / מעבדה</span>
          </button>
        </div>

        {/* 3 יתרונות מרכזיים בתחתית */}
        <div className="hero-features-bar">
          <div className="feature-box">
            <Zap size={24} color="#ffffff" />
            <div>
              <h4>זמינות ומענה מהיר</h4>
              <p>תמיכה מרחוק וטכנאי שטח עד בית העסק</p>
            </div>
          </div>

          <div className="feature-box">
            <ShieldCheck size={24} color="#ffffff" />
            <div>
              <h4>אבטחה ורציפות עסקית</h4>
              <p>גיבוי ענן, אנטי-כופר וחומות אש מנוהלות</p>
            </div>
          </div>

          <div className="feature-box">
            <CheckCircle2 size={24} color="#ffffff" />
            <div>
              <h4>אחריות ומומחיות מוכחת</h4>
              <p>פתרונות חומרה ותשתיות בתקנים המחמירים</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
