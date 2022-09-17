export default (sequelize, DataTypes) => {
  const Categorie = sequelize.define("Categories", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    refAgence: {
      type: DataTypes.INTEGER,
      references: {
        model: "Entreprises",
        key: "code",
      },
    },
  });
  return Categorie;
};
