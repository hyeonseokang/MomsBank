const Sequelize = require('sequelize');

module.exports = class Deposit extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            deadline: {
                type: Sequelize.DATEONLY,
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: true,
            paranoid: true,
            modelName: 'Deposit',
            tableName: 'deposits',
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }

    static associate(db) {
        db.Deposit.belongsTo(db.Account, {foreignKey: 'account_holder', targetKey: 'id'});
    }
}