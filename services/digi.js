const https = require('https')

const options = {
    hostname: 'https://api.telegram.org/',
    port: 443,
    method: 'GET'
}

function notif(body) {

    options["path"] = `bot${body.BotId}/sendMessage?chat_id=${body.ChatId}&text=${body.Message}${body.ParseMode !== undefined ?`&parse_mode=${body.ParseMode}` : ``}`

    const req = https.request(options, res => {
        res.on('data', d => {
            return d;
        })
    })

    req.on('error', error => {
        console.log(error)
        return error;
    })

    req.end()
}

module.exports = {
    notif
}