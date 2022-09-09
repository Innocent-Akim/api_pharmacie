import { Sequelize, DataTypes } from "sequelize";
import config from "../../config/database.js";
import init from "../model/index.js";

const db = {};
const sequelize = new Sequelize(config.development);
sequelize
  .authenticate()
  .then((_) => {
    console.log(`Connected...`);
  })
  .catch((err) => {
    console.log(`Failed connected`);
  });
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.entreprise=init.entreprises(sequelize,DataTypes);
db.agents=init.agent(sequelize,DataTypes);
db.clients=init.client(sequelize,DataTypes);
db.categories=init.categorie(sequelize,DataTypes);
db.users=init.user(sequelize,DataTypes);
db.



export default db;