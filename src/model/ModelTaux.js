export default (sequelize, DataTypes) => {
  const Taux = sequelize.define("Taux", {
    code: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    taux: {
      type: DataTypes.INTEGER,
      defaultValue: 2000,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    refAgence: {
      type: DataTypes.INTEGER,
    },
  });
  return Taux;
};
