'use strict';

var  mp = require('multiparty');

exports.index = function(req, res){
  res.render('trips/index');
};

exports.newTrip = function(req, res){
  res.render('trips/new-trip');
};

exports.create = function(req, res){
  var form = new mp.Form();
  form.parse(req, function(err, fields, files){
    console.log(fields);
    console.log(files);
  });
};
