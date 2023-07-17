class BaseError extends Error {
    httpStatusCode;
    constructor(description, httpStatusCode) {
        super(description);
        this.httpStatusCode = httpStatusCode;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default BaseError;