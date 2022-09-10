import { hash, compare, genSalt } from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const items = {};
items.initHash = async (password) => {
  return await hash(password, 10);
};

items.initCompare = async (pwd, passwordHash) => {
  return await compare(pwd, passwordHash);
};

items.initGene = async (id, username) => {
  const token = jwt.sign({ id: id, username: username }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN_HRS,
  });

  return token;
};

items.verifyToken = (req, res, next) => {
  const autoHead = req.headers.authorization;
  if (autoHead) {
    const token = autoHead.split(" ")[1];
    jwt.verify(token, process.env.JWT_KEY, (error, user) => {
      if (error) {
        return res
          .status(403)
          .json({ msg: `Token is not valid`, data: {}, token: "NO" });
      }
      req.user = user;
      next();
    });
  } else {
    res
      .status(401)
      .json({ msg: `Your not authentificated`, data: {}, token: "NO" });
  }
};

export default items;
