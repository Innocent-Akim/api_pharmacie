export default (sequelize, DataTypes) => {
  const Comptes = sequelize.define("Comptes", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    designation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    numero: {
      type: DataTypes.STRING,
    },
    codeCatecompte:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references : {
          model : "cateComptes",
          key : "code"
      },
    },
    refAgence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
        model : "entreprises",
        key : "code"
    }, 
    },
  });
  return Comptes;
};
