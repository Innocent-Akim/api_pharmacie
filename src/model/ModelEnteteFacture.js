export default (sequelize, DataTypes) => {
  const EnteteFacture = sequelize.define("EnteteFacture", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    montant: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    codeAgent: {
      type: DataTypes.INTEGER,
      references: {
        model: "Agents",
        key: "code",
      },
    },
    codeClient: {
      type: DataTypes.INTEGER,
      references: {
        model: "Clients",
        key: "code",
      },
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
  return EnteteFacture;
};
