export default (sequelize, DataTypes) => {
  const DetailFournir = sequelize.define("DetailFournir", {
    code: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
    lo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateExpiration: {
      type: DataTypes.DATE,
      defaultValue: Date.now(),
    },
    codeEnteteFournir: {
      type: DataTypes.INTEGER,
      references: {
        model: "enteteFournirs",
        key: "code",
      },
    },
    codeProduit: {
      type: DataTypes.INTEGER,
      references: {
        model: "produits",
        key: "code",
      },
    },
  });
  return DetailFournir;
};
