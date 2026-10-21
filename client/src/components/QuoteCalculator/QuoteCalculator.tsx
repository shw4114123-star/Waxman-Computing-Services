import React, { useState, useMemo } from 'react';
import {
  Calculator,
  Laptop,
  CheckSquare,
  Square,
  Send,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Sparkles
} from '../common/Icons';
import { submitLead } from '../../services/api';
import './QuoteCalculator.css';

type WorkstationOption = {
  id: string;
  label: string;
  rangeDesc: string;
  count: number;
  baseMonthlyRate: number;
};

const workstationOptions: WorkstationOption[] = [
  { id: '1-5', label: '1–5 עמדות', rangeDesc: 'עסקים קטנים / משרדי בוטיק', count: 4, baseMonthlyRate: 750 },
  { id: '6-15', label: '6–15 עמדות', rangeDesc: 'עסקים בצמיחה ומשרדים בינוניים', count: 10, baseMonthlyRate: 1500 },
  { id: '16-30', label: '16–30 עמדות', rangeDesc: 'חברות ומשרדים פעילים', count: 22, baseMonthlyRate: 2800 },
  { id: '30+', label: '30+ עמדות', rangeDesc: 'ארגונים ומוסדות', count: 35, baseMonthlyRate: 4200 },
];

const availableServices = [
  {
    id: 'it_support',
    name: 'תחזוקת IT שוטפת וריטיינר תמיכה מרחוק',
    desc: 'מענה טלפוני מהיר, שליטה מרחוק והגעת טכנאי שטח',
  },
  {
    id: 'cloud_security',
    name: 'גיבוי ענן אוטומטי ואבטחת מידע מנוהלת',
    desc: 'הגנת כופר, ניהול אנטי-וירוס וגיבוי יומי מוצפן',
  },
  {
    id: 'infrastructure_rack',
    name: 'הקמת תשתית רשת / סידור ארון תקשורת',
    desc: 'אפיון כבילה, בדיקת נקודות רשת ומתגי PoE',
  },
  {
    id: 'cameras_access',
    name: 'מצלמות אבטחה IP ובקרת כניסה',
    desc: 'התקנת מצלמות 4K, מקליט NVR וקודן חכם',
  }
];

export default function QuoteCalculator() {
  const [selectedTier, setSelectedTier] = useState<WorkstationOption>(workstationOptions[0]);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'it_support',
    'cloud_security'
  ]);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const calculatedMonthly = useMemo(() => {
    let total = selectedTier.baseMonthlyRate;
    if (selectedServices.includes('it_support')) total += 200;
    if (selectedServices.includes('cloud_security')) total += 250;
    return total;
  }, [selectedTier, selectedServices]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!name.trim()) {
      setErrorMessage('נא להזין שם מלא');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('מספר טלפון חייב להכיל לפחות 10 ספרות');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitLead({
        name,
        phone,
        businessName: businessName || undefined,
        workstationsCount: selectedTier.count,
        interestedIn: selectedServices,
        notes: `מחשבון: ${selectedTier.label}, שירותים: ${selectedServices.join(', ')}`
      });

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'שגיאה בשליחת הפנייה';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="calculator" className="calculator-section circuit-pattern-subtle">
      <div className="calculator-container">
        
        {/* כותרת */}
        <div className="calc-header">
          <div className="calc-badge">
            <Calculator size={16} />
            <span>מחשבון אינטראקטיבי</span>
          </div>
          <h2 className="calc-title">הערכת עלויות מחשוב ושירות למשרד שלך</h2>
          <p className="calc-subtitle">
            בחר את מספר העמדות ואת השירותים הנדרשים וקבל אומדן מותאם אישית להחלטה עסקית נכונה.
          </p>
        </div>

        {/* 2 טורים */}
        <div className="calc-layout">
          
          {/* טור בחירה */}
          <div className="calc-card-controls">
            
            {/* שלב 1: מספר עמדות */}
            <div>
              <div className="calc-step-label">
                <Laptop size={18} color="var(--color-brand-orange)" />
                <span>1. בחר את מספר עמדות המחשב בעסק:</span>
              </div>

              <div className="tiers-grid">
                {workstationOptions.map((opt) => {
                  const isSelected = selectedTier.id === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedTier(opt)}
                      className={`tier-btn ${isSelected ? 'selected' : ''}`}
                    >
                      <div className="tier-label">{opt.label}</div>
                      <div className="tier-desc">{opt.rangeDesc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* שלב 2: שירותים */}
            <div>
              <div className="calc-step-label">
                <Sparkles size={18} color="var(--color-brand-orange)" />
                <span>2. סמן את השירותים הרצויים:</span>
              </div>

              <div className="services-checkbox-list">
                {availableServices.map((srv) => {
                  const isChecked = selectedServices.includes(srv.id);
                  return (
                    <div
                      key={srv.id}
                      onClick={() => toggleService(srv.id)}
                      className={`service-checkbox-card ${isChecked ? 'checked' : ''}`}
                    >
                      <div className="service-cb-icon">
                        {isChecked ? <CheckSquare size={20} /> : <Square size={20} color="#64748b" />}
                      </div>
                      <div>
                        <div className="service-cb-name">{srv.name}</div>
                        <div className="service-cb-desc">{srv.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* טור סיכום וטופס */}
          <div className="calc-card-summary">
            
            <div className="summary-header">
              <span className="summary-tag">אומדן מחיר חודשי משוער</span>
              <div className="summary-price-display">
                <span className="summary-price-amount">החל מ-{calculatedMonthly.toLocaleString('he-IL')}</span>
                <span className="summary-price-currency">₪</span>
                <span className="summary-price-period">/חודש</span>
              </div>
              <p className="summary-note">
                * המחיר מהווה אומדן ראשוני בלבד. הצעת מחיר סופית ומדויקת תינתן לאחר אפיון צרכי העסק באתר הלקוח.
              </p>
            </div>

            {submitted ? (
              <div className="calc-success-box">
                <div className="success-icon-circle">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="success-title">פנייתך התקבלה בהצלחה!</h3>
                <p className="success-text">
                  הפרטים וחישוב המחשבון הועברו ישירות למומחה המחשוב שלנו. ניצור עמך קשר טלפוני בהקדם עם הצעה מסודרת.
                </p>
                <a href="tel:099631330" className="calc-phone-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <PhoneCall size={16} />
                  <span>מענה מיידי: 09-9631330</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-reset-calc"
                >
                  בצע חישוב חדש
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="calc-form">
                <div className="calc-form-title">
                  קבלת הצעת מחיר מפורטת למייל ולוואטסאפ:
                </div>

                {errorMessage && (
                  <div style={{ color: '#fca5a5', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="שם מלא *"
                  className="calc-input"
                  required
                />

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="מספר טלפון (לפחות 10 ספרות) *"
                  className="calc-input"
                  required
                />

                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="שם העסק / חברה (אופציונלי)"
                  className="calc-input"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-submit-calc"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'שולח...' : 'שלח וקבל הצעה מותאמת אישית'}</span>
                </button>

                <div className="calc-phone-note">
                  <span>או התקשר עכשיו:</span>
                  <a href="tel:099631330" className="calc-phone-link" dir="ltr">09-9631330</a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
