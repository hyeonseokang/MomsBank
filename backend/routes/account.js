const express = require('express');
const {decrypt} = require('../util/cryptohs');
const { Account }  = require('../models');
const router = express.Router();

router.get('/getall', async (req, res) => {
    const accounts = await Account.findAll();
    accounts.map(account => {
        account.name = decrypt(account.name);
        account.bank_name = decrypt(account.bank_name);
        account.account_number = decrypt(account.account_number);
    });
    res.json(accounts);
});

module.exports = router;