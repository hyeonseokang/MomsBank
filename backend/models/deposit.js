const Sequelize = require('sequelize');

module.exports = class Deposit extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            amount: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        },{

        });
    }
}