const axios = require('axios')



async function notif(body) {

    const url = `https://api.telegram.org/bot${body.BotId}/sendMessage?chat_id=${body.ChatId}&text=${body.Message}${body.ParseMode !== undefined ? `&parse_mode=${body.ParseMode}` : ``}`
    try {
        await axios.get(url)
        console.log(url)
    }
    catch (error) {
        console.log(error);
    }

}

module.exports = {
    notif
}