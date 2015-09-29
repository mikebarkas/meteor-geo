Template.cityList.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('cityList');
  });
});

Template.cityList.helpers({

  list: function () {
   //return Places.find();
   return Places.find({}, {fields: {city: 1, state: 1}, limit:8});
  }
});
