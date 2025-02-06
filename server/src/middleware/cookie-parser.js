/**
 *
 * Custom function to parse the cookies in the headers and append them as a cookies key in the req object for easy access down the request journey
 *
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next NextFunction
 */
export const parseCookie = (req, res, next) => {
  // 'test-cookie=This%20is%20a%20test%20cookie; auth-cookie=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzliN2QyYzllYmQ4ZTZhMDVmOWI0MDAiLCJpYXQiOjE3Mzg4NTE5MjMsImV4cCI6MTczODkzODMyM30.hwNMlLhSEFQf6uWD45mBGAy5YhwhovutP8iYf0hYijc'

  if (req.headers.cookie) {
    let cookies = req.headers.cookie.split("; ");

    cookies = cookies.map((cookie) => cookie.split("="));

    let cookiesObj = {};

    cookies.forEach((cookie) => {
      cookiesObj[cookie[0]] = decodeURI(cookie[1]);
    });

    // console.log({ cookiesObj });

    req.cookies = cookiesObj;
  }

  next();
};
