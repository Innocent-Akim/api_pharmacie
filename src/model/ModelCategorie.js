export default (sequelize, DataTypes) => {
  const Categorie = sequelize.define("categories", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    refAgence: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    timestamp: true,
  });
  return Categorie;
};
