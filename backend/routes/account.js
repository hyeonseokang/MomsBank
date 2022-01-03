const express = require('express');
const {decrypt} = require('../util/cryptohs');
const { Account, Deposit, Transfer }  = require('../models');
const router = express.Router();

router.get('/getall', async (req, res) => {
    const deposits = await Deposit.findAll();
    await Promise.all(deposits.map(async deposit => {
        const account = await deposit.getAccount();
        deposit.dataValues.account = {
            name: decrypt(account.name),
            bank_name: decrypt(account.bank_name),
            account_number: decrypt(account.account_number),
        };
    }));

    const transfers = await Transfer.findAll();
    await Promise.all(transfers.map(async transfer => {
        const account = await transfer.getAccount();
        if (account === null)
            return;

        transfer.dataValues.account = {
            name: decrypt(account.name),
            bank_name: decrypt(account.bank_name),
            account_number: decrypt(account.account_number),
        };
    }));
    
    const json = {
        ...deposits,
        ...transfers,
    }
    
    res.json(json);
});

module.exports = router;