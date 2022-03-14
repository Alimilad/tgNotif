#bypassing telegram Censorship for sending message with bots

##Post below data to `https://tg-notif.herokuapp.com/tgdigi`
{
    "Message": "test",
     "BotId": "1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig",
     "ChatId":"-1001213830400"
}

curl --location --request POST 'https://tg-notif.herokuapp.com/tgdigi' \
--header 'Content-Type: application/json' \
--data-raw '{
  "Message": "✅ Success: \n{\r\n \"DKP\": \"https://www.digikala.com/product/dkp-1839656\",\r\n \"ProductName\": \"کیف اداری مردانه کد P251-1\",\r\n \"VariantCode\": \"17197458\",\r\n \"VariantName\": \"قهوه ای روشن\",\r\n \"NewPrice\": 188620,\r\n \"OldPrice\": 188230,\r\n \"BestPrice\": 0,\r\n \"SecondPrice\": 189000,\r\n \"Bias\": 378,\r\n \"Description\": \"افزایش قیمت\"\r\n}",
  "BotId": "1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig",
  "ChatId": "-1001213830400"
}'

###based on these links
https://geshan.com.np/blog/2021/01/nodejs-postgresql-tutorial/
https://geshan.com.np/blog/2021/01/free-nodejs-hosting/#deploy-node.js-quotes-api-to-heroku
