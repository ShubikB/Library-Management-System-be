const errorHandler = (err, req, res, next) => {
  console.error(err.stack)

  if (message.includes("E11000")) {
    statusCode = 400
    message = "DUPLICATE USER"
  }

  res.status(err.status || 500).json({
    status: "Error",
    message: err.message || "Internal Server Error",
  })
}

export default errorHandler
