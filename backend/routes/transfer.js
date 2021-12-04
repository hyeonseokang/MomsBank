const express = require('express');
const { Account, Transfer } = require('../models');
const { get_account } = require('../util/models');

const router = express.Router();

router.post('/add', async (req, res) => {
    const body = req.body;
    const {name, bank_name, account_number, amount, sbank_name} = body;
    
    const transfer = await Transfer.create({
        bank_name: sbank_name,
        amount: amount,
    });

    if (!( name === undefined || bank_name === undefined || account_number === undefined)){
        const account = await get_account(name, bank_name, account_number);
        await account.addTransfer(transfer);
    }

    res.status(201).send('success');
});
module.exports = router;