const express = require('express');
const { Account }  = require('../models');
const { Deposit } = require('../models');
const router = express.Router();

router.get('/add', async (req,res)=>{
    await Account.create({
        name: '222',
        bank_name: '우리',
        account_number: '12341234',
    });

    const account = await Account.findOne({});
    console.log(account);

    
    const deposit = await Deposit.create({
        amount: 10000,
        deadline: '2021-12-04',
    });

    await account.addDeposit(deposit);
});

module.exports = router;