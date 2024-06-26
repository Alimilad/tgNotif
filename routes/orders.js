var express = require("express");
var router = express.Router();
const axios = require("axios");
var moment = require('jalali-moment');
moment.locale('fa', { useGregorianParser: true });  

router.post("/", async function (req, res, next) {
  try {
    const seller_id = req.body[0].variant.seller_id;
    var chat_id = -1002005573955;
    switch (seller_id) {
      case 1169158:
        chat_id = -1002005573955;
        break;
      case 798684:
        chat_id = -1002097736043;
        break;
      case 1281719:
        chat_id = -1002054737684;
        break;
      default:
        chat_id = -1002005573955;
        break;
    }

    req.body.forEach(async function(item) {
      
      const notif = {
        OrderId: item.order_id,
        Link: `https://www.digikala.com/product/dkp-${item.variant.product.id}`,
        Title: `${item.variant.title}`,
        DKPC: item.variant.id,
        DigikalaStock: `${item.variant.stock.in_the_way + item.variant.stock.in_digikala_warehouse}`,
        SellerStock: `${item.variant.stock.in_seller_warehouse}`,
        ReservedStocks: `${item.variant.stock.reserved_stocks.seller + item.variant.stock.reserved_stocks.digikala}`,
        Quantity: item.quantity,
        SellingPrice: item.selling_price,
        CreatedAt: moment(item.created_at).format('YYYY-M-D HH:mm:ss'),
        cartClosedAt: moment(item.cart_closed_at).format('YYYY-M-D HH:mm:ss'),
        CommitmentDate: moment(item.commitment_date).format('YYYY-M-D HH:mm:ss'),
      };
      
      const url = `https://api.telegram.org/bot1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig/sendMessage?chat_id=${chat_id}&text=${JSON.stringify(
        notif, null, "  "
      )}`;
      
      await axios.get(encodeURI(url));
    });
  } catch (error) {
    const url = `https://api.telegram.org/bot1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig/sendMessage?chat_id=-1002100122443&text=${JSON.stringify(
      req.body, null, "  "
    )}`;
    await axios.get(encodeURI(url));

    url = `https://api.telegram.org/bot1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig/sendMessage?chat_id=-1002100122443&text=${JSON.stringify(
      error, null, "  "
    )}`;
    await axios.get(encodeURI(url));
  }
  res.json("ok");
});

module.exports = router;


// Sample 1
// [{"order_item_id":772424686,"order_id":244326922,"variant":{"id":45241958,"seller_id":1169158,"site":"digikala","is_active":true,"is_archived":false,"title":"\u06af\u0631\u062f\u0646\u0628\u0646\u062f \u0645\u062f\u0644 \u0628\u0627\u0628 \u0627\u0633\u0641\u0646\u062c\u06cc \u0648 \u067e\u0627\u062a\u0631\u06cc\u06a9 \u0628\u0633\u062a\u0647 2 \u0639\u062f\u062f\u06cc | \u0646\u0642\u0631\u0647 \u0627\u06cc | \u06af\u0627\u0631\u0627\u0646\u062a\u06cc \u0627\u0635\u0627\u0644\u062a \u0648 \u0633\u0644\u0627\u0645\u062a \u0641\u06cc\u0632\u06cc\u06a9\u06cc \u06a9\u0627\u0644\u0627","product":{"id":10280312,"category_id":9898,"title":"\u06af\u0631\u062f\u0646\u0628\u0646\u062f \u0645\u062f\u0644 \u0628\u0627\u0628 \u0627\u0633\u0641\u0646\u062c\u06cc \u0648 \u067e\u0627\u062a\u0631\u06cc\u06a9 \u0628\u0633\u062a\u0647 2 \u0639\u062f\u062f\u06cc","shipping_nature_id":1},"shipping_type":"both","supplier_code":"bab_noghrei","dk_lead_time":1,"sbs_lead_time":24,"stock":{"in_the_way":0,"in_digikala_warehouse":11,"in_seller_warehouse":2799,"reserved_stocks":{"seller":0,"digikala":3}},"price":{"id":2340179212,"selling_price":378000,"rrp_price":378000,"reference_price":381871,"discount":0,"order_limit":30,"is_promotion_price":false,"tags":null}},"quantity":1,"shipping_type":"digikala","order_status":"warehouse","selling_price":378000,"created_at":"2024-05-06 18:41:00","cart_closed_at":"2024-05-06 18:41:00","shipment_status":"pending","commitment_date":"2024-05-07 00:00:00"}]