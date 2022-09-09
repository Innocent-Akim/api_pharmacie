export default (sequelize, DataTypes) => {
  const Fournisseur = sequelize.define("Fournisseur", {
    code: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING,
    },
    codeAgence: {
      type: DataTypes.INTEGER,
    },
  });
  return Fournisseur;
};
