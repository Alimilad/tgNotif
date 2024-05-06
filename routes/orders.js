var express = require("express");
var router = express.Router();
const axios = require("axios");
var moment = require('jalali-moment');
moment().locale('fa').format();

router.post("/", async function (req, res, next) {
  try {
    const seller_id = req.body[0].variant.seller_id;
    var chat_id = -1002005573955;
    switch (seller_id) {
      case 1169158:
        chat_id = -1002005573955;
        break;
      default:
        chat_id = -1002005573955;
        break;
    }
    var body1= req.body[0];
    const notif = {
      Link: `https://www.digikala.com/product/dkp-${body1.variant.product.id}`,
      Title: `${body1.variant.title}`,
      DigikalaStock: `${body1.variant.stock.in_the_way + body1.variant.stock.in_digikala_warehouse}`,
      SellerStock: `${body1.variant.stock.in_seller_warehouse}`,
      Quantity: body1.quantity,
      SellingPrice: body1.selling_price,
      CreatedAt: moment(body1.created_at).format();
    };

    const url = `https://api.telegram.org/bot1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig/sendMessage?chat_id=${chat_id}&text=${JSON.stringify(
      notif
    )}`;

    await axios.get(encodeURI(url));
  } catch (error) {
    const url = `https://api.telegram.org/bot1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig/sendMessage?chat_id=-1002100122443&text=${JSON.stringify(
      req.body
    )}`;
    await axios.get(encodeURI(url));
  }
  res.json("ok");
});

module.exports = router;
