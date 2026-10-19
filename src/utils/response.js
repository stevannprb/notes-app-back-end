const response = (res, statusCode, message, data = null) => {
  return res
    .status(statusCode)
    .json({
      code: statusCode,
      status: statusCode < 400 ? 'success' : 'failed',
      message,
      data,
    });
};

export default response;