export default (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    telephone: {
      type: DataTypes.STRING,
    },
    refAgence: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  return Client;
};
