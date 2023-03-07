var express = require('express');
var router = express.Router();
var cryptoJS = require('crypto-js')

const fs = require('fs');

router.post('/', function(req, res) {
  fs.readFile("mails.txt", function (err, data) {
    if(err){
      console.log(err);
    }

    const emails = JSON.parse(data)

    let incomingEmail = req.body;
    let email = req.body.email

    let cryptoEmail = cryptoJS.AES.encrypt(email, "Salt nyckel").toString();

    emails.push(cryptoEmail);


    fs.writeFile("mails.txt", JSON.stringify(emails), function(err){
      if(err){
        console.log(err)
      }
    })
    res.send("Worked")
    return;
  })
});

module.exports = router;
