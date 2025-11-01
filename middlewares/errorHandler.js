/**
 * 404 Not Found handler
 */
export const notFound = (req, res, next) => {
  res.status(404).json({ error: "Not Found" });
};

/**
 * Central error handler
 * Make sure to add this AFTER routes.
 */
export const errorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  const payload = {
    error: err.message || "Internal Server Error",
  };
  if (process.env.NODE_ENV !== "production" && err.stack) {
    payload.stack = err.stack;
  }
  res.status(status).json(payload);
};
