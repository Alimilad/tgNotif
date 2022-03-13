var express = require('express');
var digi = require('../services/digi');
var router = express.Router();

router.post('/', async function (req, res, next) {
    try {
        res.json(digi.notif(req.body));
    } catch (err) {
        console.error(`Error while posting quotes `, err.message);
        next(err);
    }
});

module.exports = router;
