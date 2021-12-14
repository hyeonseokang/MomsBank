const express = require('express');
const { Account, Transfer } = require('../models');
const { get_account } = require('../util/models');
const {encrypt, decrypt} = require('../util/cryptohs');
const router = express.Router();

router.post('/add', async (req, res) => {
    const body = req.body;
    const {name, bank_name, account_number, amount, sbank_name} = body;
    
    const transfer = await Transfer.create({
        bank_name: sbank_name,
        amount: amount,
    });

    if (!( name === undefined || bank_name === undefined || account_number === undefined)){
        console.log("key: ", process.env.CRYPTO_KEY);
        const crypto_name = encrypt(name, process.env.CRYPTO_KEY);
        const crypto_bank_name = encrypt(bank_name, process.env.CRYPTO_KEY);
        const crypto_account_number = encrypt(account_number, process.env.CRYPTO_KEY);
        
        const account = await get_account(crypto_name, crypto_bank_name, crypto_account_number);
        await account.addTransfer(transfer);
    }

    res.status(201).send('success');
});

router.delete('/remove/:id', async (req, res) => {
    const id = req.params.id;

    await Transfer.destroy({
        where: {
            id: id,
        }
    });

    res.status(200);
    res.send('success');
});

module.exports = router;