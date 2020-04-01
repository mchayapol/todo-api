var express = require('express');
var router = express.Router();
var Task = require('../models/task');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task', function (req, res, next) {
  Task.find().exec(function (err, tasks) {
    if (err) {
      console.error(err);
      res.status(300).json({ status: error, message: err })
    } else {
      res.json({
        status: 'Success',
        data: tasks
      })
    }
  });
});

router.post('/task', function(req, res, next){
  console.log(req);
});
module.exports = router;
