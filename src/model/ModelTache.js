class Tache extends Model {}
Tache.init(
  {
    title: Sequelize.STRING,
  },
  { sequelize, modelName: "taches" }
);
