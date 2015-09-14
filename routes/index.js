var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/email', function(req, res, next){
  console.log(req.body);

  $.get('https://api.sendgrid.com/api/blocks.get.json?api_user='+process.env.SENDGRID_USER+'&api_key='+process.env.SENDGRID_KEY, function(){

  })
})


module.exports = router;
