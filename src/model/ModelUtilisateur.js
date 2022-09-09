export default (sequelize, DataTypes) => {
  const Utilisateurs = sequelize.define("Utilisateurs", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    refAgence: {
      type: DataTypes.INTEGER,
    },
    codeAgent: {
      type: DataTypes.INTEGER,
    },
  });
  return Utilisateurs;
};
