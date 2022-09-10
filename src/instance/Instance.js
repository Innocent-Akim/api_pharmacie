import { Sequelize, DataTypes } from "sequelize";
import config from "../../config/database.js";
import init from "../model/index.js";

const db = {};
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD,config.DEV);
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
db.entreprise = init.entreprises(sequelize, DataTypes);
db.agents = init.agent(sequelize, DataTypes);
db.clients = init.client(sequelize, DataTypes);
db.categories = init.categorie(sequelize, DataTypes);
db.fournisseurs = init.fournisseur(sequelize, DataTypes);
db.users = init.user(sequelize, DataTypes);
db.cateCompte = init.cateCompte(sequelize, DataTypes);
db.produits = init.produit(sequelize, DataTypes);
db.comptes = init.compte(sequelize, DataTypes);
db.enteteFactures = init.enteteFacture(sequelize, DataTypes);
db.detailFactures = init.detailFacture(sequelize, DataTypes);
db.enteteFournirs = init.enteteFournir(sequelize, DataTypes);
db.detailFournirs = init.detailFournir(sequelize, DataTypes);
db.operation = init.operations(sequelize, DataTypes);
db.tauxs = init.taux(sequelize, DataTypes);
db.stocks = init.stock(sequelize, DataTypes);
db.paiment = init.paiement(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Yes re-sync done!`);
  })
  .catch((error) => {
    console.log(`Failed re-sync error  ${error}`);
  });

export default db;
