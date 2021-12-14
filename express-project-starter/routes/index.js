var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Do I Need It', authenticated: res.locals.authenticated });
});

module.exports = router;
