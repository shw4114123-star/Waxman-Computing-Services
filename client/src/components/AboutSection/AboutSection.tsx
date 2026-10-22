import {
  Network,
  Wrench,
  Server,
  ShieldCheck,
  Video,
  CheckCircle2,
  Zap,
  Phone,
  ArrowLeft,
  Sparkles,
  MapPin
} from '../common/Icons';
import './AboutSection.css';

interface AboutSectionProps {
  onOpenTicket?: () => void;
}

export default function AboutSection({ onOpenTicket }: AboutSectionProps) {
  const pillars = [
    {
      icon: <Network size={26} />,
      title: 'הקמת תשתיות תקשורת ורשתות',
      description:
        'תכנון וחיווט כבילה מובנית (CAT6/CAT7), סידור והקמת ארונות תקשורת מקצועיים, ופריסת רשתות Wi-Fi ארגוניות יציבות ורחבות טווח.',
    },
    {
      icon: <Wrench size={26} />,
      title: 'שירותי IT מנוהלים ו-Helpdesk',
      description:
        'תמיכה שוטפת מרחוק (מרכז שירות מהיר) וטכנאי שטח עד בית העסק, כולל מעבדת תיקונים מתקדמת למחשבים ניידים ונייחים.',
    },
    {
      icon: <Server size={26} />,
      title: 'אספקת חומרה וציוד היקפי',
      description:
        'שרתים עסקיים, עמדות עבודה ומחשבים ניידים מהמותגים המובילים בעולם (Dell, Lenovo, HP), מסכים, מדפסות ומערכות אל-פסק (UPS).',
    },
    {
      icon: <ShieldCheck size={26} />,
      title: 'אבטחת מידע, סייבר וגיבוי ענן',
      description:
        'הגנה רב-שכבתית מפני מתקפות כופר (Ransomware), חומות אש מנוהלות, גיבוי ענן מוצפן ואוטומטי, וניהול סביבות Microsoft 365.',
    },
    {
      icon: <Video size={26} />,
      title: 'מערכות אבטחה ומתח נמוך',
      description:
        'מצלמות אבטחה חכמות באיכות 4K עם צפייה מרחוק, מערכות הקלטה NVR, קודנים ובקרת כניסה מתקדמת למשרדים ולעסקים.',
    },
  ];

  const values = [
    {
      title: 'רציפות עסקית מעל הכל',
      desc: 'זמן תגובה מהיר (SLA) לכל פנייה, מתוך הבנה ברורה שכל דקת השבתה במחשוב עולה לכם בכסף ובמוניטין.',
    },
    {
      title: 'אחריות כוללת מקצה לקצה',
      desc: 'ללא גלגול אחריות בין ספקים – מהבורג בארון התקשורת ועד לענן המאובטח ביותר, אנחנו הכתובת האחת שלכם.',
    },
    {
      title: 'שקיפות והוגנות מוחלטת',
      desc: 'אפיון צרכים מדויק ומקצועי ללא מכירת ציוד מיותר, מחירים הוגנים והצעות מחיר ברורות ומפורטות מראש.',
    },
    {
      title: 'יחס אישי וזמינות אמיתית',
      desc: 'מענה אנושי ישיר על ידי צוות שמכיר את העסק שלכם אישית, מלווה אתכם יום-יום ומספק שקט נפשי מלא.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* כותרת החלק */}
        <div className="about-header">
          <div className="about-badge">
            <Sparkles size={15} color="var(--color-brand-orange)" />
            <span>השותף הטכנולוגי שלך • אודות המשרד</span>
          </div>
          <h2 className="about-main-title">וקסמן שירותי מיחשוב ותשתיות</h2>
          <p className="about-subtitle">
            פתרונות מחשוב לעסקים שחושבים על עצמם – בהובלת מנדי וקסמן
          </p>
        </div>

        {/* כרטיס ראשי: סיפור המשרד והחזון */}
        <div className="about-story-card">
          <div className="story-content-col">
            <span className="story-kicker">עורק החיים הטכנולוגי של העסק שלך</span>
            <h3 className="story-headline">
              מחשוב יציב, מאובטח וחכם – שמאפשר לעסק שלך לצמוח בשקט
            </h3>

            <p className="story-paragraph">
              <strong>וקסמן שירותי מיחשוב ותשתיות</strong>, בהובלת מנדי וקסמן ובסיס הפעילות המרכזי בנתניה,
              היא חברה מובילה המספקת מעטפת פתרונות IT, תשתיות תקשורת ומערכות מחשוב מתקדמות
              לעסקים, חברות, משרדים וארגונים באזור השרון, המרכז וגוש דן.
            </p>

            <p className="story-paragraph">
              אנו מאמינים שמערך מחשוב אינו רק "חומרה וכבלים" – הוא עורק החיים והמנוע העסקי שלך.
              כשהמחשוב עובד חלק, מהיר וללא הפרעות, העסק שלך פנוי להתמקד בצמיחה, במכירות
              ובשירות לקוחות, ללא תקלות משביתות והפתעות מיותרות.
            </p>

            {/* תגיות הדגשה מהירות */}
            <div className="story-highlights-row">
              <div className="highlight-pill">
                <Zap size={16} color="var(--color-brand-orange)" />
                <span>זמינות וזמני תגובה מהירים</span>
              </div>
              <div className="highlight-pill">
                <MapPin size={16} color="var(--color-brand-blue-deep)" />
                <span>פריסה בשרון, במרכז ובגוש דן</span>
              </div>
              <div className="highlight-pill">
                <ShieldCheck size={16} color="#10b981" />
                <span>אבטחה והגנת כופר רב-שכבתית</span>
              </div>
            </div>
          </div>

          {/* טור צדדי: כרטיס מותג יוקרתי */}
          <div className="story-brand-side">
            <div className="brand-profile-box">
              <div className="brand-logo-frame">
                <img
                  src="/logo-with-address.jpeg"
                  alt="וקסמן שירותי מיחשוב - מנדי וקסמן מנכ''ל - החוזה מלובלין 7 נתניה"
                  className="brand-card-img"
                />
              </div>

              <div className="brand-profile-details">
                <h4 className="brand-lead-title">מנדי וקסמן • מנכ״ל ומייסד</h4>
                <p className="brand-lead-quote">
                  ״אנחנו לוקחים אחריות כוללת על מערך המחשוב שלכם, כדי שתוכלו לעבוד בראש שקט.״
                </p>

                <div className="brand-contact-action-row">
                  <a href="tel:099631330" className="btn-brand-call">
                    <Phone size={15} />
                    <span dir="ltr">09-9631330</span>
                  </a>

                  {onOpenTicket && (
                    <button onClick={onOpenTicket} className="btn-brand-ticket">
                      <span>פתיחת קריאה</span>
                      <ArrowLeft size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* חלק 2: מה אנחנו עושים (One-Stop-Shop) */}
        <div className="about-services-wrap">
          <div className="about-sub-header">
            <span className="about-sub-badge">One-Stop-Shop טכנולוגי</span>
            <h3 className="about-sub-title">כל פתרונות המחשוב והתקשורת תחת קורת גג אחת</h3>
            <p className="about-sub-desc">
              במקום להתמודד עם מספר ספקים שונים שמעבירים אחריות מאחד לשני, אצלנו תקבלו מענה מלא, הרמוני ואחראי:
            </p>
          </div>

          <div className="about-pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="about-pillar-card">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* חלק 3: העקרונות שמובילים אותנו */}
        <div className="about-values-section">
          <div className="values-header">
            <h3 className="values-title">העקרונות שמובילים אותנו בכל פרויקט וקריאה</h3>
            <p className="values-subtitle">
              אמנת השירות והמחויבות שלנו לכל עסק ומשרד שאנו מלווים
            </p>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-item-card">
                <div className="value-check-icon">
                  <CheckCircle2 size={20} color="#10b981" />
                </div>
                <div className="value-text-wrap">
                  <h4 className="value-card-title">{val.title}</h4>
                  <p className="value-card-desc">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
