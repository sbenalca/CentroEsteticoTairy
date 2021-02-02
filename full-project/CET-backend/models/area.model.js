module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define("area_1",{
        idarea:{
            type: DataTypes.STRING,
            primaryKey: true
        },
        nombre : {
            type: DataTypes.STRING
        }
    },
    {
        tableName: 'area_1',
        timestamps: false
    });
    return Area;
};