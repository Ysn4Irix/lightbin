/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 10-10-2021
 * @modify date 11-10-2021
 * @desc [Errors middlewares]
 */

const notFound = (req, res, next) => {
  return res.render("404");
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message:
      process.env.NODE_ENV === "production"
        ? "An Error Occured"
        : error.message,
    stack: process.env.NODE_ENV === "production" ? "🙄 🙄" : error.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
