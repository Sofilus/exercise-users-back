var express = require('express');
var router = express.Router();

const fs = require('fs');

router.post('/', function(req, res) {
  fs.readFile("mails.txt", function (err, data) {
    if(err){
      console.log(err);
    }

    const emails = JSON.parse(data)

    let incomingEmail = req.body;

    emails.push(incomingEmail);


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
