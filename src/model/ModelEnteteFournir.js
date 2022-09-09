export default (sequelize, DataTypes) => {
    const EnteteFournir= sequelize.define("EnteteFournir", {
        code:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        codeFournisseur:{
            type:DataTypes.INTEGER,
        },
        refAgence:{
            type:DataTypes.INTEGER,
            allowNull:true,
        }
    });
    return EnteteFournir;
};