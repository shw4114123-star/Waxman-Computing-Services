/**
 * יצירת שגיאה עם קוד סטטוס מותאם
 */
export function createError(message, status) {
  const err = new Error(message);
  err.status = status;
  return err;
}

/**
 * Middleware מרכזי לטיפול בשגיאות
 */
export function errorHandler(err, _req, res, _next) {
  const statusCode = err.status || 500;
  console.error(`[Error ${statusCode}]:`, err.message);

  res.status(statusCode).json({
    success: false,
    message: err.message || 'שגיאת שרת פנימית'
  });
}
