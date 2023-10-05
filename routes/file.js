var express = require('express');
var router = express.Router();
const axios = require('axios')
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const multer = require('multer');

const bot = new TelegramBot('1885356896:AAHn4kXULt-i-JzSulaUq_uQQkYvz2fUaig', { polling: true });

// Set storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

// Create multer instance with the storage configuration
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), (req, res) => {

    // Send the file to the Telegram bot
    const chatId = '-1001213830400';
    const fileStream = fs.createReadStream(`./uploads/${req.file.originalname}`);
    bot.sendDocument(chatId, fileStream);

    fs.unlink(`./uploads/${req.file.originalname}`, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    });

        res.status(200).send('File uploaded successfully!');

    });

    module.exports = router;