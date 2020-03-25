var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task', function(req, res, next) {
  res.json([
    { id: 1, name: 'Get up' },
    { id: 2, name: 'Eat' },
    { id: 3, name: 'Go to school' },
    { id: 4, name: 'Study' },
    { id: 5, name: 'Go home' },
    { id: 6, name: 'Sleep' }
  ]);
});

module.exports = router;
