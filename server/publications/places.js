Meteor.publish('places', function () {
  return Places.find({}, {sort: {pop:-1}, limit:20});
});

Meteor.publish('cityList', function () {
  return Places.find({}, {fields: {city: 1, state: 1}, limit:80});
});
