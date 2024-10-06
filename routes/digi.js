var express = require('express');
var digi = require('../services/digi');
var router = express.Router();



router.all('/:year?/:month?/:day?', async function (req, res, next) {
    try {
        if (req.method === 'POST')
            res.json(await digi.notif(req.body));
        else if (req.method === 'GET') {
            var query = require('url').parse(req.url, true).query;
            res.json(await digi.notif(query));
        }
        
        //res.json(await digi.notif(req.body));
    } catch (err) {
       // res.json(err)
        next(err);
    }
});

module.exports = router;
