import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ errors: ["Login required (no token)"] });
  }

  const [, token] = authorization.split(" ");

  try {
    const dataDecoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dataDecoded;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({ errors: ["Expired or invalid token"] });
  }
};
