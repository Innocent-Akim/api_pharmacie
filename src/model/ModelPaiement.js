export default (sequelize, DataTypes) => {
  const Paiement = sequelize.define("Paiement", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    montant: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    codeFacture: {
      type: DataTypes.INTEGER,
      references: {
        model: "EnteteFactures",
        key: "code",
      },
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return Paiement;
};
