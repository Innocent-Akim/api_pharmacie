export default (sequelize, DataTypes) => {
  const EnteteFacture = sequelize.define("EnteteFacture", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },
    montant:{
        type: DataTypes.FLOAT,
        defaultValue:0
    },
    codeAgent: {
      type: DataTypes.INTEGER,
    },
    codeClient: {
      type: DataTypes.INTEGER,
    },
    refAgence:{
        type: DataTypes.INTEGER,
    },
    timestamp: true,
  });
  return EnteteFacture;
};
