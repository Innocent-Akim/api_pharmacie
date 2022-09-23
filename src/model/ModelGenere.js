export default (sequelize, DataTypes) => { 
    const generateFacture = sequelize.define("generateFacture", {
        code: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    });
    return generateFacture;
}