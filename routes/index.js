var express = require('express');
var router = express.Router();
var Task = require('../models/task');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});


router.route('/task')
  .get(function (req, res) {
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
  })
  .post(function (req, res) {
    console.log('task', req.body);
    let task = new Task(req.body);
    task.save((err, t) => {
      if (err) {
        console.error(err);
        res.json(err);
      } else {
        res.json({
          status: 'Success',
          data: task
        })
      }
    });
  })
  .put(function (req, res) {
    console.log('task', req.body);
    let updateTask = req.body;
    let task = Task.findByIdAndUpdate(updateTask._id, { name: updateTask.name },
      (err, doc) => {
        if (err) {
          console.error(err);
          res.json(err);
        } else {
          // console.log(doc,updateTask)
          res.json({
            status: 'Success',
            data: updateTask
          })
        }
      });
  })
  .delete(function (req, res) {
    let deleteTask = req.body;
    Task.findByIdAndDelete(deleteTask._id,
      (err, doc) => {
        if (err) {
          console.error(err);
          res.json(err);
        } else {
          console.log(doc,doc)
          res.json({
            status: 'Success',
            data: deleteTask
          })
        }
      })
  });

module.exports = router;
