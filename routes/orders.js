var express = require('express');
var router = express.Router();
const axios = require('axios')


router.post('/', async function (req, res, next) {
  try {
    const seller_id = req.body.variant.seller_id;
    var chat_id;
    switch (seller_id) {
      case 1169158:
        chat_id= -1002005573955;
        break;
      default:
        chat_id = -1002005573955;
        break;
    }
    const url = `https://api.telegram.org/bot1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig/sendMessage?chat_id=${chat_id}&text=${JSON.stringify(req.body)}`
    await axios.get(encodeURI(url))
  }
  catch (error) {
    console.log(error);
  }
  res.json('ok');
});

module.exports = router;
