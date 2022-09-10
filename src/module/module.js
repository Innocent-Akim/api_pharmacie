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
    expiresIn:  process.env.JWT_EXPIRES_IN_HRS,
  });

  return token;
};

export default items;
