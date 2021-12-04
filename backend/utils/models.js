const {Account} = require('../models');

const get_account = async (name, bank_name, account_number) => {
    let account = await Account.findOne({
        where: {
            account_number: account_number,
        }
    });

    if (account === null) {
        account = await Account.create({
            name: name,
            bank_name: bank_name,
            account_number: account_number,
        });
    }

    return account;
};

module.exports = {get_account};