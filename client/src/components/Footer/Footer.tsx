import { Phone, Mail, MapPin, ArrowUp, WhatsApp } from '../common/Icons';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* מיתוג וסלוגן */}
          <div className="footer-col">
            <div className="footer-logo-row">
              <img
                src="/logo-banner.jpeg"
                alt="וקסמן פתרונות מחשוב"
                style={{ height: '40px', width: 'auto', borderRadius: '8px', backgroundColor: '#fff', padding: '2px 6px' }}
              />
              <span className="footer-logo-text">
                וקסמן <span style={{ color: 'var(--color-brand-orange)' }}>שירותי מיחשוב</span>
              </span>
            </div>

            <p className="footer-slogan">
              "פתרונות מחשוב – לעסקים שחושבים על עצמם"
            </p>

            <p className="footer-about-text">
              מתמחים באפיון, הקמה ותחזוקת מערכי IT, תשתיות רשת, ארונות תקשורת, מצלמות אבטחה, גיבוי ענן ומעבדת תיקונים מתקדמת.
            </p>
          </div>

          {/* ניווט מהיר */}
          <div className="footer-col">
            <h4 className="footer-col-title">ניווט מהיר</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#services">תחומי הפעילות של העסק</a>
              </li>
              <li className="footer-link-item">
                <a href="#calculator">מחשבון הצעת מחיר אינטראקטיבי</a>
              </li>
              <li className="footer-link-item">
                <a href="#catalog">קטלוג מוצרים, שרתים וחבילות</a>
              </li>
              <li className="footer-link-item">
                <a href="#contact">פתיחת קריאת שירות / מעבדה</a>
              </li>
            </ul>
          </div>

          {/* אזורי פעילות */}
          <div className="footer-col">
            <h4 className="footer-col-title">כתובת ושעות פעילות</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <MapPin size={16} color="var(--color-brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span><strong>כתובת:</strong> החוזה מלובלין 7, נתניה</span>
              </div>
              <div style={{ marginTop: '8px', color: '#cbd5e1' }}>
                <div style={{ fontWeight: 700, color: '#ffffff' }}>שעות פעילות:</div>
                <div>ימים א' - ה': 09:00 - 17:00</div>
                <div>ימי שישי וערבי חג: המשרד סגור תשאירו פנייה במייל או בוואצאפ</div>
              </div>
            </div>
          </div>

          {/* פרטי קשר ישירים */}
          <div className="footer-col">
            <h4 className="footer-col-title">יצירת קשר ישיר או בוואצאפ</h4>

            <div className="footer-contact-box">
              <div className="footer-contact-info">
                <span className="footer-contact-label">טלפון ישיר / וואצאפ:</span>
                <span className="footer-contact-num" dir="ltr">09-9631330</span>
              </div>

              <div className="footer-contact-actions">
                <a
                  href="tel:099631330"
                  className="footer-action-icon-btn call-btn"
                  title="התקשר למשרד (09-9631330)"
                  aria-label="התקשר למשרד"
                >
                  <Phone size={18} color="#ffffff" />
                </a>

                <a
                  href="https://wa.me/97299631330?text=שלום,%20אני%20פונה%20דרך%20אתר%20וקסמן%20שירותי%20מיחשוב"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-action-icon-btn whatsapp-btn"
                  title="שליחת הודעת וואצאפ (053-310-4124)"
                  aria-label="שלח הודעה בוואצאפ"
                >
                  <WhatsApp size={18} color="#ffffff" />
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12.5px' }}>
              <Mail size={15} color="var(--color-brand-blue)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <div>קריאות שירות: <a href="mailto:service@waxman-tech.co.il" dir="ltr" style={{ color: '#ffffff', fontWeight: 600 }}>service@waxman-tech.co.il</a></div>
                <div>חשבוניות וניהול: <a href="mailto:office@waxman-tech.co.il" dir="ltr" style={{ color: '#ffffff', fontWeight: 600 }}>office@waxman-tech.co.il</a></div>
              </div>
            </div>
          </div>

        </div>

        {/* שורת זכויות יוצרים תחתונה */}
        <div className="footer-bottom-bar">
          <div>
            © {new Date().getFullYear()} וקסמן שירותי מיחשוב ותשתיות. כל הזכויות שמורות.
          </div>

          <button onClick={scrollToTop} className="btn-scroll-top">
            <span>חזרה לראש העמוד</span>
            <ArrowUp size={14} color="var(--color-brand-orange)" />
          </button>
        </div>

      </div>
    </footer>
  );
}
