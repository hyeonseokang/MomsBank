const Sequelize = require('sequelize');

module.exports = class Account extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(5),
                allowNull: false,
            },
            bank_name: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            account_number: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true,
            },
        },{
            sequelize,
            timestamps: false,
            paranoid: false,
            modelName: 'Account',
            tableName: 'accounts',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}