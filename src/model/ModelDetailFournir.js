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
      defaultValue: DataTypes.NOW,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
   
    },
    codeEnteteFournir: {
      type: DataTypes.INTEGER,
      references: {
        model: "EnteteFournirs",
        key: "code",
      },
    },
    codeProduit: {
      type: DataTypes.INTEGER,
      references: {
        model: "Produits",
        key: "code",
      },
    },
  });
  return DetailFournir;
};
