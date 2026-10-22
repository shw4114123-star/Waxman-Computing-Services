import {
  Network,
  ShieldCheck,
  Video,
  CheckCircle2,
  Zap,
  Phone,
  ArrowLeft,
  Sparkles,
  MapPin,
  Laptop
} from '../common/Icons';
import './AboutSection.css';

interface AboutSectionProps {
  onOpenTicket?: () => void;
}

export default function AboutSection({ onOpenTicket }: AboutSectionProps) {
  // קהלי יעד ומצבי לקוח (כולל לקוח יחיד)
  const audiences = [
    {
      icon: <Network size={26} />,
      badge: 'הקמה מאפס',
      title: 'משרדים ועסקים חדשים / מעבר משרד',
      description:
        'תכנון ופריסת כל מעטפת המחשוב והתקשורת מאפס – כבילה מובנית, ארון תקשורת, נתבים, עמדות עבודה ו-Wi-Fi ארגוני, לכניסה חלקה ושקטה לפעילות.',
    },
    {
      icon: <Zap size={26} />,
      badge: 'ריטיינר IT שוטף',
      title: 'עסקים קיימים וחברות בצמיחה',
      description:
        'הסכמי שירות IT מנוהלים ומותאמים אישית, שדרוג שרתים ועמדות, תמיכת Helpdesk מהירה מרחוק וטכנאי שטח מוסמך באתר הלקוח.',
    },
    {
      icon: <ShieldCheck size={26} />,
      badge: 'אבטחה והגנת כופר',
      title: 'משרדים עם מידע רגיש ודרישות אבטחה',
      description:
        'עורכי דין, רואי חשבון, מרפאות ופיננסים: גיבוי ענן מוצפן ואוטומטי, הגנה רב-שכבתית מפני מתקפות כופר (Ransomware) וחומות אש מנוהלות.',
    },
    {
      icon: <Video size={26} />,
      badge: 'מתח נמוך ואבטחה',
      title: 'מתחמים, חנויות ומבנים מסחריים',
      description:
        'מערכי מצלמות IP ברזולוציית 4K עם צפייה ישירה מהנייד, קודנים, בקרת כניסה מאובטחת ורשתות Wi-Fi מופרדות לעובדים ולאורחים.',
    },
    {
      icon: <Laptop size={26} />,
      badge: 'מעבדה ותמיכה אישית',
      title: 'לקוחות פרטיים, עצמאיים ומשרד ביתי (לקוח יחיד)',
      description:
        'מעבדת שירות מתקדמת לתיקון מחשבים ניידים ונייחים, שדרוגי חומרה ו-SSD מהירים, ניקוי וירוסים, ותמיכה מרחוק מהירה למשתמש הבודד.',
    },
  ];

  // שיטת העבודה של וקסמן (4 שלבים)
  const workflowSteps = [
    {
      number: '01',
      title: 'אפיון ומיפוי צרכים בשטח',
      description:
        'הגעה לאתר העסק או אפיון מעמיק של התקלה, סקירת המערכות הקיימות והבנת הצרכים האמיתיים שלך ללא הנחות.',
    },
    {
      number: '02',
      title: 'תכנון הנדסי והצעת מחיר שקופה',
      description:
        'בניית מפרט טכני מדויק שמתאים בול להיקף הפעילות, ללא דחיפת ציוד עודף, ובמחיר ברור וידוע מראש.',
    },
    {
      number: '03',
      title: 'הקמה, חיווט והטמעה מקצועית',
      description:
        'עבודה נקייה ומדויקת לפי התקנים המחמירים ביותר (CAT7, סיבים, ארונות תקשורת מדוגמים) במינימום הפרעה לשגרה.',
    },
    {
      number: '04',
      title: 'ליווי שוטף, ניטור ו-SLA מהיר',
      description:
        'מוקד שירות זמין, תמיכה מרחוק וטכנאי שטח מהירים, ניטור גיבויים ורציפות עסקית מלאה כדי שהעבודה לא תעצור לעולם.',
    },
  ];

  // עקרונות ואמנת השירות
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
              לעסקים, חברות, משרדים ולקוחות פרטיים בכל איזורי הארץ.
            </p>

            <p className="story-paragraph">
              אנו מאמינים שמערך מחשוב אינו רק "חומרה וכבלים" – הוא עורק החיים והמנוע העסקי שלך.
              כשהמחשוב עובד חלק, מהיר וללא הפרעות, אתה פנוי להתמקד בצמיחה, במכירות
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
                <span>פריסה בכל רחבי הארץ</span>
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
                  src="/logo-banner.jpeg"
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

        {/* חלק 2: למי אנחנו מתאימים? (קהלי יעד כולל לקוח יחיד) */}
        <div className="about-audiences-wrap">
          <div className="about-sub-header">
            <span className="about-sub-badge">התאמה מלאה לכל צורך</span>
            <h3 className="about-sub-title">הפתרונות שלנו מותאמים בדיוק לשלב שבו אתה נמצא</h3>
            <p className="about-sub-desc">
              בין אם אתה עסק בצמיחה, משרד חדש בהקמה או לקוח פרטי הזקוק למעבדה אמינה – אנחנו הכתובת המקצועית עבורך:
            </p>
          </div>

          <div className="about-audiences-grid">
            {audiences.map((item, idx) => (
              <div key={idx} className="about-audience-card">
                <div className="audience-card-top">
                  <div className="audience-icon-box">{item.icon}</div>
                  <span className="audience-type-badge">{item.badge}</span>
                </div>
                <h4 className="audience-title">{item.title}</h4>
                <p className="audience-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* חלק 3: שיטת העבודה של וקסמן (4 שלבים) */}
        <div className="about-workflow-wrap">
          <div className="about-sub-header">
            <span className="about-sub-badge">שקט נפשי מ-א' ועד ת'</span>
            <h3 className="about-sub-title">שיטת העבודה של וקסמן – 4 שלבים לשקט טכנולוגי</h3>
            <p className="about-sub-desc">
              איך זה עובד בפועל? תהליך מסודר, שקוף ומדויק שמבטיח עבודה חלקה ללא הפתעות:
            </p>
          </div>

          <div className="about-workflow-grid">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="workflow-step-card">
                <div className="step-number-tag">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* חלק 4: העקרונות שמובילים אותנו */}
        <div className="about-values-section">
          <div className="values-header">
            <h3 className="values-title">העקרונות שמובילים אותנו בכל פרויקט וקריאה</h3>
            <p className="values-subtitle">
              אמנת השירות והמחויבות שלנו לכל עסק, משרד ולקוח שאנו מלווים
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
