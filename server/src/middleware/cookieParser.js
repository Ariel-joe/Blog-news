export const cookieParser = (req, res, next) => {
  if (req.headers.cookie) {
    let cookies = req.headers.cookie.split("; ");

    cookies = cookies.map((cookie) => cookie.split("="));

    let cookiesObj = {};

    cookies.forEach((cookie) => {
      cookiesObj[cookie[0]] = decodeURI(cookie[1]);
    });

    // console.log(cookiesObj);

    req.cookies = cookiesObj;
  }

  next();
};
