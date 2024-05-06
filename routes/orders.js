var express = require('express');
var router = express.Router();
const axios = require('axios')


router.post('/', async function (req, res, next) {
  const url = `https://api.telegram.org/bot1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig/sendMessage?chat_id=-100200557395&text=${JSON.stringify(req.body)}`
  try {
    await axios.get(encodeURI(url))
  }
  catch (error) {
    console.log(error);
  }
  res.json('ok');
});

module.exports = router;
