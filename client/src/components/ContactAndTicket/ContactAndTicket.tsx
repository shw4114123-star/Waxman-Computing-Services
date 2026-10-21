import { useState, useEffect } from 'react';
import {
  FileText,
  Headset,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check
} from '../common/Icons';
import { submitLead, submitSupportTicket } from '../../services/api';
import './ContactAndTicket.css';

interface ContactAndTicketProps {
  initialTab?: 'quote' | 'ticket';
  prefilledInterest?: string;
}

export default function ContactAndTicket({
  initialTab = 'quote',
  prefilledInterest = '',
}: ContactAndTicketProps) {
  const [activeTab, setActiveTab] = useState<'quote' | 'ticket'>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  // שדות טופס ליד
  const [leadName, setLeadName] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [workstationsCount, setWorkstationsCount] = useState('');
  const [interestedIn, setInterestedIn] = useState('');
  const [notes, setNotes] = useState('');
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState(false);
  const [leadError, setLeadError] = useState('');

  useEffect(() => {
    if (prefilledInterest) {
      setInterestedIn(prefilledInterest);
    }
  }, [prefilledInterest]);

  // שדות טופס קריאת שירות
  const [clientName, setClientName] = useState('');
  const [ticketPhone, setTicketPhone] = useState('');
  const [issueType, setIssueType] = useState<'remote_support' | 'lab_repair' | 'network_issue' | 'cameras'>('remote_support');
  const [urgency, setUrgency] = useState<'normal' | 'high' | 'critical'>('normal');
  const [description, setDescription] = useState('');
  const [ticketSubmitting, setTicketSubmitting] = useState(false);
  const [ticketSuccessNumber, setTicketSuccessNumber] = useState<string | null>(null);
  const [ticketError, setTicketError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadError('');

    if (!leadName.trim()) {
      setLeadError('נא להזין שם מלא');
      return;
    }
    if (!leadPhone.trim() || leadPhone.replace(/\D/g, '').length < 10) {
      setLeadError('מספר טלפון חייב להכיל לפחות 10 ספרות');
      return;
    }

    setLeadSubmitting(true);
    try {
      await submitLead({
        name: leadName,
        phone: leadPhone,
        businessName: businessName || undefined,
        workstationsCount: workstationsCount ? Number(workstationsCount) : undefined,
        interestedIn: interestedIn ? [interestedIn] : [],
        notes: notes || undefined,
      });

      setLeadSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'שגיאה בשליחת הפנייה';
      setLeadError(msg);
    } finally {
      setLeadSubmitting(false);
    }
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTicketError('');

    if (!clientName.trim()) {
      setTicketError('נא להזין שם איש קשר');
      return;
    }
    if (!ticketPhone.trim() || ticketPhone.replace(/\D/g, '').length < 10) {
      setTicketError('מספר טלפון חייב להכיל לפחות 10 ספרות');
      return;
    }
    if (!description.trim() || description.trim().length < 5) {
      setTicketError('נא לתאר את מהות התקלה לפחות ב-5 תווים');
      return;
    }

    setTicketSubmitting(true);
    try {
      const res = await submitSupportTicket({
        clientName,
        phone: ticketPhone,
        issueType,
        urgency,
        description,
      });

      setTicketSuccessNumber(res.ticketNumber);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'שגיאה בפתיחת קריאת השירות';
      setTicketError(msg);
    } finally {
      setTicketSubmitting(false);
    }
  };

  const copyTicketNumber = () => {
    if (ticketSuccessNumber) {
      navigator.clipboard.writeText(ticketSuccessNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="contact-section circuit-pattern">
      <div className="contact-container">

        {/* כותרת החלק */}
        <div className="contact-header">
          <span className="contact-badge">מרכז שירות ופניות</span>
          <h2 className="contact-title">יצירת קשר ופתיחת קריאת שירות</h2>
          <p className="contact-subtitle">
            בין אם אתה זקוק להצעת מחיר לתשתית חדשה, לתמיכה מרחוק דחופה או לתיקון במעבדה – אנחנו כאן עבורך.
          </p>
        </div>

        <div className="contact-layout">

          {/* טור ימין: טופס כפול */}
          <div className="contact-form-card">

            {/* טאבים */}
            <div className="contact-tabs-nav">
              <button
                type="button"
                onClick={() => setActiveTab('quote')}
                className={`tab-btn ${activeTab === 'quote' ? 'active' : ''}`}
              >
                <FileText size={16} />
                <span>בקשת הצעת מחיר / ייעוץ</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('ticket')}
                className={`tab-btn ${activeTab === 'ticket' ? 'active' : ''}`}
              >
                <Headset size={16} />
                <span>פתיחת קריאת שירות / מעבדה</span>
              </button>
            </div>

            {/* טאב 1: הצעת מחיר */}
            {activeTab === 'quote' && (
              <div>
                {leadSuccess ? (
                  <div className="success-card-feedback">
                    <CheckCircle2 size={44} color="#34d399" />
                    <h3 style={{ fontSize: '22px', fontWeight: 800 }}>פנייתך נשלחה בהצלחה!</h3>
                    <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6' }}>
                      תודה שפנית לוקסמן שירותי מיחשוב. קיבלנו את פרטי הפנייה ונציג מומחה מטעמנו יחזור אליך בהקדם.
                    </p>
                    <p style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '6px' }}>
                      לפניות ישירות בנושאי חשבוניות וניהול: <a href="mailto:office@waxman-tech.co.il" dir="ltr" style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 700 }}>office@waxman-tech.co.il</a>
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setLeadSuccess(false);
                        setLeadName('');
                        setLeadPhone('');
                        setBusinessName('');
                        setNotes('');
                      }}
                      className="btn-reset-calc"
                    >
                      שליחת פנייה נוספת
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit}>
                    {leadError && (
                      <div style={{ color: '#fca5a5', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                        <AlertCircle size={16} />
                        <span>{leadError}</span>
                      </div>
                    )}

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">
                          שם מלא <span className="required-star">*</span>
                        </label>
                        <input
                          type="text"
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="שם מלא"
                          required
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          מספר טלפון (10 ספרות) <span className="required-star">*</span>
                        </label>
                        <input
                          type="tel"
                          value={leadPhone}
                          onChange={(e) => setLeadPhone(e.target.value)}
                          placeholder="050-0000000"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">שם העסק / חברה</label>
                        <input
                          type="text"
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          placeholder="שם החברה"
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">מספר עמדות מחשב משוער</label>
                        <input
                          type="number"
                          value={workstationsCount}
                          onChange={(e) => setWorkstationsCount(e.target.value)}
                          placeholder="0"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">תחום עניין / מוצר מבוקש</label>
                      <input
                        type="text"
                        value={interestedIn}
                        onChange={(e) => setInterestedIn(e.target.value)}
                        placeholder="תיאור המוצר המבוקש"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">הערות או פרטים נוספים</label>
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="פרט בקצרה על הצרכים של העסק..."
                        className="form-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={leadSubmitting}
                      className="btn-form-submit"
                    >
                      <Send size={16} />
                      <span>{leadSubmitting ? 'שולח...' : 'שלח בקשה להצעת מחיר'}</span>
                    </button>
                  </form>
                )}
              </div>
            )}

            {/* טאב 2: קריאת שירות */}
            {activeTab === 'ticket' && (
              <div>
                {ticketSuccessNumber ? (
                  <div className="success-card-feedback">
                    <Headset size={44} color="var(--color-brand-orange)" />
                    <h3 style={{ fontSize: '22px', fontWeight: 800 }}>קריאת השירות נפתחה במערכת!</h3>

                    <div className="ticket-number-display-box">
                      <div className="ticket-label-small">מספר קריאת השירות שלך:</div>
                      <div className="ticket-num-row">
                        <span className="ticket-number-value" dir="ltr">
                          {ticketSuccessNumber}
                        </span>
                        <button
                          type="button"
                          onClick={copyTicketNumber}
                          className="btn-copy-ticket"
                          title="העתק מספר קריאה"
                        >
                          {copied ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                        </button>
                      </div>
                    </div>

                    <p style={{ fontSize: '13.5px', color: '#cbd5e1', lineHeight: '1.6', maxWidth: '420px' }}>
                      שמור את מספר הקריאה. טכנאי מחשוב מוסמך מטעמנו יתחבר אלייך מרחוק או ייצור קשר טלפוני בהקדם האפשרי.
                    </p>
                    <p style={{ fontSize: '13px', color: '#cbd5e1', marginTop: '6px' }}>
                      למשלוח צילומי מסך ופרטים נוספים למוקד: <a href="mailto:service@waxman-tech.co.il" dir="ltr" style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 700 }}>service@waxman-tech.co.il</a>
                    </p>

                    <a
                      href="tel:099631330"
                      className="btn-primary-hero"
                      style={{ padding: '10px 20px', fontSize: '14px', marginTop: '6px' }}
                    >
                      <Phone size={16} />
                      <span>לסיוע דחוף חייג: 09-9631330</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setTicketSuccessNumber(null);
                        setClientName('');
                        setTicketPhone('');
                        setDescription('');
                      }}
                      className="btn-reset-calc"
                    >
                      פתיחת קריאת שירות נוספת
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleTicketSubmit}>
                    {ticketError && (
                      <div style={{ color: '#fca5a5', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                        <AlertCircle size={16} />
                        <span>{ticketError}</span>
                      </div>
                    )}

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">
                          שם איש קשר / לקוח <span className="required-star">*</span>
                        </label>
                        <input
                          type="text"
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="שם מלא"
                          required
                          className="form-input"
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          מספר טלפון לחזרה (10 ספרות) <span className="required-star">*</span>
                        </label>
                        <input
                          type="tel"
                          value={ticketPhone}
                          onChange={(e) => setTicketPhone(e.target.value)}
                          placeholder="050-0000000"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label className="form-label">סוג השירות המבוקש</label>
                        <select
                          value={issueType}
                          onChange={(e) =>
                            setIssueType(
                              e.target.value as 'remote_support' | 'lab_repair' | 'network_issue' | 'cameras'
                            )
                          }
                          className="form-select"
                        >
                          <option value="remote_support">תמיכה מרחוק (Helpdesk)</option>
                          <option value="lab_repair">תיקון מחשב במעבדה</option>
                          <option value="network_issue">תקלת רשת / ארון תקשורת</option>
                          <option value="cameras">תקלת מצלמות אבטחה / קודן</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">רמת דחיפות</label>
                        <select
                          value={urgency}
                          onChange={(e) =>
                            setUrgency(e.target.value as 'normal' | 'high' | 'critical')
                          }
                          className="form-select"
                        >
                          <option value="normal">רגילה (במהלך יום העסקים)</option>
                          <option value="high">גבוהה (מענה מהיר נדרש)</option>
                          <option value="critical">קריטית (השבתת עבודה מלאה)</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        תיאור התקלה או הבקשה <span className="required-star">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="תאר את התקלה..."
                        required
                        className="form-textarea"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={ticketSubmitting}
                      className="btn-form-submit"
                    >
                      <Headset size={16} />
                      <span>{ticketSubmitting ? 'פותח קריאה...' : 'פתח קריאת שירות וקבל מספר קריאה'}</span>
                    </button>
                  </form>
                )}
              </div>
            )}

          </div>

          {/* טור שמאל: מוקד שירות */}
          <div className="contact-sidebar">
            <div className="contact-info-card">

              {/* לוגו רשמי כולל כתובת ומנכ"ל */}
              <div style={{ marginBottom: '18px', textAlign: 'center' }}>
                <img
                  src="/logo-with-address.jpeg"
                  alt="מנדי וקסמן מנכ''ל - החוזה מלובלין 7, נתניה"
                  style={{
                    width: '100%',
                    maxWidth: '340px',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 14px rgba(101, 179, 228, 0.15)',
                    backgroundColor: '#ffffff'
                  }}
                />
              </div>

              <div className="contact-card-header">
                <div className="contact-icon-bubble">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--color-brand-dark)' }}>מוקד שירות טלפוני ישיר</h3>
                  <p style={{ fontSize: '12px', color: 'var(--color-brand-blue-deep)' }}>מענה מקצועי לכל אזור השרון והמרכז</p>
                </div>
              </div>

              <div className="direct-phone-box">
                <span style={{ fontSize: '12px', color: '#64748b' }}>חייג אלינו ישירות למשרד:</span>
                <a href="tel:099631330" className="direct-phone-num" dir="ltr">
                  09-9631330
                </a>
              </div>

              <div className="contact-details-list">
                <div className="detail-line">
                  <MapPin size={18} color="var(--color-brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>
                    <strong>כתובת ראשית:</strong> החוזה מלובלין 7, נתניה
                  </span>
                </div>
                <div className="detail-line">
                  <Clock size={18} color="var(--color-brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>א' - ה': 09:00 - 17:00</span>
                </div>
                <div className="detail-line">
                  <Mail size={18} color="var(--color-brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div>
                      <strong>קריאות שירות:</strong>{' '}
                      <a href="mailto:service@waxman-tech.co.il" dir="ltr" style={{ color: 'var(--color-brand-blue-deep)', fontWeight: 700, textDecoration: 'underline' }}>
                        service@waxman-tech.co.il
                      </a>
                    </div>
                    <div>
                      <strong>חשבוניות וניהול:</strong>{' '}
                      <a href="mailto:office@waxman-tech.co.il" dir="ltr" style={{ color: 'var(--color-brand-blue-deep)', fontWeight: 700, textDecoration: 'underline' }}>
                        office@waxman-tech.co.il
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sla-card">
              <div className="sla-title">
                <CheckCircle2 size={18} color="#34d399" />
                <span>אמנת השירות של וקסמן שירותי מיחשוב</span>
              </div>
              <ul className="sla-list">
                <li>מענה טכנאי ראשוני תוך דקות למקרי השבתה קריטית.</li>
                <li>בדיקה והצעת מחיר שקופה מראש ללא הפתעות.</li>
                <li>שימוש ברכיבי חומרה מקוריים בלבד עם אחריות יצרן.</li>
                <li>שמירה מוחלטת על סודיות ואבטחת נתוני בית העסק.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
