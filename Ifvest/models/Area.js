module.exports = (sequelize, DataTypes)=>{
    const Area = sequelize.define('Area',{
            area: DataTypes.STRING,
            fescricao: DataTypes.STRING
        }, {});
        Area.associate = (models)=>{
            Area.hasMany(models.AreaProf);
        }   

        return Area;
}
