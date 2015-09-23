Meteor.publish('places', function () {
  return Places.find({}, {sort: {pop:-1}, limit:100});
});

Meteor.publish('cityList', function () {
  var self = this;
  var cityList = Places.aggregate([
    {'$group' : {'_id': '$city'}}
  ])
  _(cityList).each(function() {
    self.added('cityList', Random.id(), {city: 'city test'});
  });
});
