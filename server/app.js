import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import cors from 'cors';

import servicesRouter from './routes/services.router.js';
import productsRouter from './routes/products.router.js';
import leadsRouter from './routes/leads.router.js';
import ticketsRouter from './routes/tickets.router.js';
import { errorHandler } from './utils/errorHandler.js';

let PORT = parseInt(process.env.PORT || '5001', 10);
const app = express();

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// לוג בקשות נכנסות
app.use((req, _res, next) => {
  const time = new Date().toLocaleTimeString('he-IL');
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
});

// נקודת כניסה ראשית לבדיקת שרת
app.get('/', (_req, res) => {
  res.json({
    name: 'שרת וקסמן שירותי מיחשוב ותשתיות',
    slogan: 'פתרונות מחשוב – לעסקים שחושבים על העתיד',
    phone: '09-9631330',
    status: 'running'
  });
});

// בדיקת חיות שרת
app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'Waxman Computing Services API',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

// ניתובי API
app.use('/api/services', servicesRouter);
app.use('/api/products', productsRouter);
app.use('/api/leads', leadsRouter);
app.use('/api/tickets', ticketsRouter);

// טיפול בשגיאות
app.use(errorHandler);

// פונקציית הפעלה עם מנגנון גיבוי אוטומטי אם הפורט תפוס
function startServer(portToTry) {
  const server = app
    .listen(portToTry, () => {
      console.log('====================================================');
      console.log(`🚀 שרת וקסמן שירותי מיחשוב פועל בהצלחה בפורט ${portToTry}`);
      console.log(`📡 כתובת השרת: http://localhost:${portToTry}`);
      console.log(`📋 בדיקת שירותים: http://localhost:${portToTry}/api/services`);
      console.log(`📦 קטלוג מוצרים: http://localhost:${portToTry}/api/products`);
      console.log(`💚 בדיקת תקינות: http://localhost:${portToTry}/api/health`);
      console.log('====================================================');
    })
    .on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        const nextPort = portToTry + 1;
        console.warn(`⚠️ פורט ${portToTry} תפוס, מנסה להפעיל אוטומטית בפורט ${nextPort}...`);
        startServer(nextPort);
      } else {
        console.error('שגיאה בהפעלת השרת:', err);
      }
    });

  return server;
}

startServer(PORT);
