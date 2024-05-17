var express = require('express');
var router = express.Router();
const axios = require('axios')
const { Web3 } = require('web3');

const ETHRpcUrl = 'https://eth1.lava.build/lava-referer-caf453a2-994d-44e4-8807-2fb223b96b34/'; // Replace with your RPC URL

router.post('/', async function (req, res, next) {
  const url1 = `https://api.telegram.org/bot${req.body.BotId}/sendMessage?chat_id=${req.body.ChatId}&text=hggggg${req.body.ParseMode !== undefined ? `&parse_mode=${req.body.ParseMode}` : ``}`
  await axios.get(encodeURI(url1))
  try {
     const web3 = new Web3(new Web3.providers.HttpProvider(ETHRpcUrl));
     //Get the balance in Wei
      const balanceWei = await web3.eth.getBalance(req.body.address);
      res.json(balanceWei);
      // Convert the balance from Wei to Ether
      balanceEth = web3.utils.fromWei(balanceWei, 'ether');
      var message = `balance : ${balanceEth} \n address : ${req.body.address}`;
      const url = `https://api.telegram.org/bot${req.body.BotId}/sendMessage?chat_id=${req.body.ChatId}&text=${message}${req.body.ParseMode !== undefined ? `&parse_mode=${req.body.ParseMode}` : ``}`
      await axios.get(encodeURI(url))
      res.json('ok');
  } 
  catch (error) {
    res.json(error);

  }
});

module.exports = router;
