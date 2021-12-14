const express = require('express');
const Sequelize = require('sequelize');
const router = express.Router();

const { Deposit, Transfer } = require('../models');

router.get('/deposit', async (req, res) => {
    const deposits = await Deposit.findAll({
        where: {
            deletedAt: {[Sequelize.Op.eq]: null},
        },
        order: [
            ['deadline', 'ASC'],
        ],
    });

    res.json(deposits);
});

router.get('/transfer', async (req, res) => {
    const transfers = await Transfer.findAll({
        where: {
            deletedAt: {[Sequelize.Op.eq]: null},
        },
        order: [
            ['createdAt', 'ASC'],
        ],
    });

    res.json(transfers);
});

module.exports = router;