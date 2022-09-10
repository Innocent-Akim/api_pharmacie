export default (sequelize, DataTypes) => {
  const Produit = sequelize.define("Produit", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    designation: {
      type: DataTypes.STRING,
    },
    pu: {
      type: DataTypes.FLOAT,
    },
    qtealert: {
      type: DataTypes.FLOAT,
    },
    refAgence: {
      type: DataTypes.INTEGER,
      references : {
        model : "Entreprises",
        key : "code"
    },
    },
  });
  return Produit;
};
