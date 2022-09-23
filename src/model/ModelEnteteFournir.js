export default (sequelize, DataTypes) => {
  const EnteteFournir = sequelize.define("EnteteFournir", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codeFournisseur: {
      type: DataTypes.INTEGER,
      references: {
        model: "Fournisseurs",
        key: "code",
      },
    },
    refAgence: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Entreprises",
        key: "code",
      },
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return EnteteFournir;
};
