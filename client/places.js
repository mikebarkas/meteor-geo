Meteor.subscribe('places');

Template.places.helpers({

  places: function () {
    return Places.find();
  }
});
