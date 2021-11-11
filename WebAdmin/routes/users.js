var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/list');
});

router.get('/lock_list', function(req, res, next) {
  res.render('user/lockList');
});

router.get('/unlock_list', function(req, res, next) {
  res.render('user/unlockList');
});

module.exports = router;
