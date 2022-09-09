export default (sequelize, DataTypes) => {
    const EnteteFournir= sequelize.define("EnteteFournir", {
        code:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        codeFournisseur:{
            type:DataTypes.INTEGER,
            references : {
                model : "fournisseurs",
                key : "code"
            },
        },
        refAgence:{
            type:DataTypes.INTEGER,
            allowNull:true,
            references : {
                model : "entreprises",
                key : "code"
            },
        }
    });
    return EnteteFournir;
};