var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/email', function(req, res, next){
  console.log(req.body);
  // unirest.post('https://api.sendgrid.com/api/mail.send.json?api_user='+process.env.SENDGRID_USER+'&api_key='+process.env.SENDGRID_KEY+'&to='+process.env.EMAIL+'&subject=Email&text='+req.body.text+'&from='+req.body.email)
  // .end(function(data){
  //   console.log(data.body);
  // })
  });


module.exports = router;
