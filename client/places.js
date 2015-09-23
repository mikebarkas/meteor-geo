Template.places.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('places');
  });
});

Template.places.helpers({

  places: function () {
    return Places.find();
  }
});
