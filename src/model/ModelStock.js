export default (sequelize, DataTypes) => {
  const Stocks = sequelize.define("Stocks", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    qte: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    codeProduit: {
      type: DataTypes.INTEGER,
      references : {
        model : "produits",
        key : "code"
    },
    },
  });
  return Stocks;
};
