export default (sequelize, DataTypes) => {
  const Entreprises = sequelize.define("Entreprises", {
    code: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rccm: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    idImpot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
    Entreprises.associate = (models) => {
      // associations can be defined here
      Entreprises.hasOne(models.Client, { foreignKey: "refAgence" });
    };
  return Entreprises
}
