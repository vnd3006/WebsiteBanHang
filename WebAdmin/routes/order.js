var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/delivered', function(req, res, next) {
  res.render('order/delivered');
});

router.get('/delivery', function(req, res, next) {
    res.render('order/delivery');
  });



  
module.exports = router;
