export default (sequelize, DataTypes) => {
  const Operations = sequelize.define("Operations", {
    code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    montant: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "ENTREE",
    },
    motif: {
      type: DataTypes.TEXT,
    },
    codeAgent: {
      type: DataTypes.INTEGER,
      references : {
        model : "Agents",
        key : "code"
    },
    },
    codeAgence:{
        type: DataTypes.INTEGER,
        references : {
          model : "Entreprises",
          key : "code"
      },
    },
  });
  return Operations;
};
