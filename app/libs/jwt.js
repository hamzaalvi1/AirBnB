import jwt from "jsonwebtoken";

export const getAccessToken = (payload) => {
  const secretKey = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secretKey);
  return token;
};

export const verifyAccessToken = (payload) => {
  const secretKey = process.env.SECRET_KEY;
  try {
    const decode = jwt.verify(payload, secretKey);
    return decode;
  } catch (err) {
    console.log(err);
    return null;
  }
};
