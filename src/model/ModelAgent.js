export default (sequelize, DataTypes) => {
  const Agent = sequelize.define("Agent", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING,
    },
    refAgence: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: "entreprises",
        key: "code",
      },
    },
  });
  return Agent;
};
