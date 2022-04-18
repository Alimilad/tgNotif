var express = require('express');
var router = express.Router();
const axios = require('axios')


router.post('/', async function (req, res, next) {
  const url = `https://api.telegram.org/bot986910087:AAEviFSrKh8VbfEeczTWXIsQpudBj7iMwlY/sendMessage?chat_id=-1001754529302&text=${JSON.stringify(req.body)}`
  try {
    await axios.get(encodeURI(url))
    console.log(url)
  }
  catch (error) {
    console.log(error);
  }
  res.json('ok');
});

module.exports = router;
