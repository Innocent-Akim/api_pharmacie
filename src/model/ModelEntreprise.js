export default (sequelize, DataTypes) => {
  const Entreprises = sequelize.define("Entreprises", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rccm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    idImpot: {
      type: DataTypes.STRING,
    },
    telephone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  });
  return Entreprises;
};
