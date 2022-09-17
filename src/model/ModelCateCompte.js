export default (sequelize, DataTypes) => {
    const CateCompte = sequelize.define("CateCompte", {
      code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      designation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      refAgence: {
        type: DataTypes.INTEGER,
        references: {
          model: "Entreprises",
          key: "code",
        },
      },
    });
    return CateCompte; 
};