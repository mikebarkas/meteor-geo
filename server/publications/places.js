Meteor.publish('places', function () {
  return Places.find({}, {sort: {pop:-1}, limit:100});
});
