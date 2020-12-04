const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                min: 8,
            }
        }
    });

    User.associate = models => {
        User.hasMany(models.Post, {
            foreignKey: 'user_id',
            sourceKey: 'id'
        });
    }

    return User;

}