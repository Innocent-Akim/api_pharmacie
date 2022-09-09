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
      references : {
        model : "agents",
        key : "code"
    },
    },
    codeClient: {
      type: DataTypes.INTEGER,
      references : {
        model : "clients",
        key : "code"
    },
    },
    refAgence:{
        type: DataTypes.INTEGER,
        references : {
            model : "entreprises",
            key : "code"
        },
    },
    timestamp: true,
  });
  return EnteteFacture;
};
