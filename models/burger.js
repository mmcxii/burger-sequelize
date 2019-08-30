module.exports = (sequelize, DataTypes) =>
    sequelize.define(
        'Burger',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            devoured: {
                type: DataTypes.TINYINT,
                defaultValue: 0,
            },
        },
        { timestamps: false }
    );
