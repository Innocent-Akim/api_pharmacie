export default (sequelize, DataTypes) => {
  const Fournisseur = sequelize.define("Fournisseur", {
    code: {
      type: DataTypes.INTEGER,
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
      references : {
        model : "Entreprises",
        key : "code"
    },
    },
  });
  return Fournisseur;
};
