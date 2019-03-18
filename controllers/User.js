/*
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            notNull: false,
            validate: {
                len: [1,50]
                // excape out of coding chars here
            }
        },
        email: {
            type: DataTypes.String,
            allowNull: true,
            validate: {
                len: [1,50],
                isEmail: true
            }
        },
        number_of_Groups: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });
}
*/