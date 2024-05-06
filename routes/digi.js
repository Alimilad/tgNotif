var express = require('express');
var digi = require('../services/digi');
var router = express.Router();
const { Web3 } = require('web3');
const { RpcProvider } = require('starknet');
const { toBigInt } = require('ethers');

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
        const gasPrice = await web3Ethereum.eth.getGasPrice();
        console.log(gasPrice);

        const provider = new RpcProvider({
            nodeUrl: starknetRpcLink,
        });
        
        const ethTokenContract = "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7";
        const accountContract = toBigInt('0x029E3B6879c6d7Dc2dFAf851dFDBBfa285349cEF66FF894Ed96a0f96C5eA1fB9').toString();

        // Call the contract to get the account's balance
        const balanceCall = {
            contractAddress: ethTokenContract,
            entrypoint: 'balanceOf',
            calldata: [accountContract],
        }
        const starknetBalance = await provider.callContract(balanceCall);
        console.log(starknetBalance);
        //res.json(await digi.notif(req.body));
    } catch (err) {
        console.error(`Error while posting quotes `, err);
       // res.json(err)
        next(err);
    }
});

module.exports = router;
