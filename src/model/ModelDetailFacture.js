export default (sequelize, DataTypes) => {
  const Facture = sequelize.define("DetailFacture", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    qte: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    pu: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    codeFacture: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "EnteteFactures",
        key: "code",
      },
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    codeProduit: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Produits",
        key: "code",
      },
    },
  });
  return Facture;
};
