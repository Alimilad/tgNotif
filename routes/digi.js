var express = require('express');
var digi = require('../services/digi');
var router = express.Router();
const Web3 = require('web3');

const ethereumRpcLink = 'https://eth1.lava.build/lava-referer-caf453a2-994d-44e4-8807-2fb223b96b34/';
const starknetRpcLink = 'https://rpc.starknet.lava.build/lava-referer-caf453a2-994d-44e4-8807-2fb223b96b34/';



router.all('/:year?/:month?/:day?', async function (req, res, next) {
    try {
        if (req.method === 'POST')
            res.json(await digi.notif(req.body));
        else if (req.method === 'GET') {
            var query = require('url').parse(req.url, true).query;
            res.json(await digi.notif(query));
        }
        const web3Ethereum = new Web3(ethereumRpcLink);
        const web3Starknet = new Web3(starknetRpcLink);
        const gasPrice = await web3Ethereum.eth.getGasPrice();
        const starknetBalance = await web3Starknet.eth.getBalance('0x029E3B6879c6d7Dc2dFAf851dFDBBfa285349cEF66FF894Ed96a0f96C5eA1fB9');
        console.log(gasPrice);
        console.log(starknetBalance);
        //res.json(await digi.notif(req.body));
    } catch (err) {
        console.error(`Error while posting quotes `, err);
        res.json(err)
        next(err);
    }
});

module.exports = router;
