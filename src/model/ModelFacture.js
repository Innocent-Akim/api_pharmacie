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
    },
    codeProduit: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    timestamp: true,
  });
  return Facture;
};
