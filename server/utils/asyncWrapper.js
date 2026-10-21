/**
 * עטיפת פונקציות אסינכרוניות לתפיסת שגיאות והעברתן ל-errorHandler
 */
export function asyncWrapper(func) {
  return (req, res, next) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
}
