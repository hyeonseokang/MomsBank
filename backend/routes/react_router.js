const express = require('express');
const path = require('path');

const router = express.Router();

const index = path.resolve(__dirname, '../public/index.html');

router.get([
    '/transfer',
    '/deposit',
    '/check',
    '/success',
], (req, res) => {
    res.sendFile(index);
});

module.exports = router;