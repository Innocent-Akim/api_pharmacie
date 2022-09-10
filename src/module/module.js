import { hash, compare } from "bcrypt";

const items = {};
items.initHash = async (password) => {
  return await hash(password, 10);
};

items.initCompare = async (password, passwordHash) => {
  const status = await compare(password, passwordHash);
  if (status) {
    return true;
  }
  return false;
};

export default items;
