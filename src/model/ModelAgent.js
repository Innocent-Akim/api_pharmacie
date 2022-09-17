export default (sequelize, DataTypes) => {
  const Agent = sequelize.define("Agent", {
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
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    refAgence: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Entreprises",
        key: "code",
      },
    },
  });
  return Agent;
};
