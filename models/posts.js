
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        title: {
            type: DataTypes.STRING,

        },
        body: {
            type: DataTypes.STRING,

        }
        
    });

    Post.associate = models => {
        Post.belongsTo(models.Post, {
            foreignKey: 'user_id',
            sourceKey: 'id'
        });
    }

    return Post
}