'use strict';

function Person(){
}

Object.defineProperty(Trip, 'collection', {
  get: function(){return global.mongodb.collection('trips');}
});

Trip.all = function(cb){
  Trip.collection.find().toArray(cb);
};

module.exports = Trip;

