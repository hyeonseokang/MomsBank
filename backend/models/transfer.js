const Sequelize = require('sequelize');

module.exports = class Transfer extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            bank_name: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Transfer',
            tableName: 'transfers',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Deposit.belongsTo(db.Account, {foreignKey: 'account_holder', targetKey: 'id'});
    }
}