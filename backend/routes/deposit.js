const express = require('express');
const { Account }  = require('../models');
const { Deposit } = require('../models');
const router = express.Router();

router.post('/add', async (req,res)=>{
    const body = req.body;
    const {name, bank_name, account_number, amount, deadline} = body;
    
    const account = await get_account(name, bank_name, account_number);
    const deposit = await Deposit.create({
        amount: amount,
        deadline: deadline,
    });

    await account.addDeposit(deposit);

    res.status(201);
    res.send("success");
});

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

module.exports = router;