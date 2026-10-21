/**
 * Middleware לולידציה באמצעות סכמות Zod (זהה למבנה הקיים בריפו שלך)
 */
export function validate(schema) {
  return (req, _res, next) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query
    });

    if (!result.success) {
      const message = result.error.issues[0]?.message || 'נתונים לא תקינים';
      const error = new Error(message);
      error.status = 400;
      return next(error);
    }

    if (result.data.body) {
      req.body = result.data.body;
    }

    next();
  };
}
