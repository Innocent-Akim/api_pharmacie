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
    codeAgent: {
      type: DataTypes.INTEGER,
      references : {
        model : "Agents",
        key : "code"
    },
    },
  });
  return Utilisateurs;
};
