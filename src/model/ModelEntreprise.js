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
      validate: {
        notEmpty: { msg: "\'nom\' ne doit pas être vide" },
        notNull: { msg: "\'nom\' est une propriété requise" },
      },
    },
    rccm: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "\'rccm\' ne doit pas être vide" },
        notNull: { msg: "\'rccm\' est une propriété requise" },
      },
    },
    idImpot: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : { msg: '\'telephone\' ne doit pas être vide' },
        notNull : { msg: '\'telephone\' est une propriété requise' }
    }},
    telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty : { msg: '\'telephone\' ne doit pas être vide' },
        notNull : { msg: '\'telephone\' est une propriété requise' }}
    },
    email: {
      type: DataTypes.STRING,
    },

  });
  return Entreprises;
};
