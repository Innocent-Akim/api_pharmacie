export default (sequelize, DataTypes) => {
    const EnteteFournir = sequelize.define("EnteteFournir", {
      code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      codeFournisseur: {
        type: DataTypes.INTEGER,
        references: {
          model: "fournisseurs",
          key: "code",
        },
      },
      refAgence: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Entreprises",
          key: "code",
        },
      },
    });
    return EnteteFournir;
};