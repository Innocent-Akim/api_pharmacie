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
    refEntreprise: {
      type: DataTypes.STRING,
    },
  });
  return Produit;
};
