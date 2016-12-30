var express = require("express");
var router = express.Router();
var moment = require("moment"); //to parse time input

router.get('/:time', function(req, res, next){

  var time = req.params.time;
  time = Number(time) ? moment(Number(time)*1000) : moment(time);

  if (time.isValid()){
    unix = Number(time.format("X"));
    natural = time.format("dddd, MMMM Do YYYY");
  } else {
    unix = null;
    natural = null;
  }

  res.json({
    unix: unix,
    natural: natural
  });

});

module.exports = router;
