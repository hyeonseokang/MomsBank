const express = require('express');
const { Account }  = require('../models');
const { Deposit } = require('../models');
const {encrypt, decrypt} = require('../util/cryptohs');
const { get_account } = require('../util/models');
const router = express.Router();

router.post('/add', async (req, res) => {
    const body = req.body;
    const {name, bank_name, account_number, amount, deadline} = body;

    const crypto_name = encrypt(name, process.env.CRYPTO_KEY);
    const crypto_bank_name = encrypt(bank_name, process.env.CRYPTO_KEY);
    const crypto_account_number = encrypt(account_number, process.env.CRYPTO_KEY);
    const account = await get_account(crypto_name, crypto_bank_name, crypto_account_number);
    const deposit = await Deposit.create({
        amount: amount,
        deadline: deadline,
    });

    await account.addDeposit(deposit);

    res.status(201).send('success');
});

router.delete('/remove/:id', async (req, res) => {
    const id = req.params.id;

    await Deposit.destroy({
        where: {
            id: id,
        }
    });

    res.status(200);
    res.send('success');
});

module.exports = router;