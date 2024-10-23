class ApiError extends Error {
  constructor(
    statusCode = 500,
    message = " some error occurred",
    errors = [],
    stack,
    data = null
  ) {
    this.statusCode = statusCode;
    super(message);
    this.errors = errors;
    this.data = data;
    this.success = false;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
