const Sequelize = require('sequelize');
const Account = require('./account');
const Deposit = require('./deposit');
const Transfer = require('./transfer');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password
  ,config);

db.sequelize = sequelize;
db.Account = Account;
db.Deposit = Deposit;
db.Transfer = Transfer;

Account.init(sequelize);
Deposit.init(sequelize);
Transfer.init(sequelize);

Account.associate(db);
Deposit.associate(db);
Transfer.associate(db);

module.exports = db;