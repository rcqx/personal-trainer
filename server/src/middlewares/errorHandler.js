import BaseError from "../utils/baseError.js";
import config from "../config/config.js";

export const errorHandler = (err, req, res, next) => {
  err.httpStatusCode = err.httpStatusCode || 500;

  if (config.env === "development") {
    console.error(err);

    res.status(err.httpStatusCode).json({
      success: false,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  if (config.env === "production") {
    let error = { ...err };

    error.message = err.description;

    res.status(error.httpStatusCode || 500).json({
      success: false,
      description: error.description || "Internal Server Error",
    });
  }
};

export default errorHandler;
