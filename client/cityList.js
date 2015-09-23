Template.cityList.onCreated(function () {
  var self = this;

  self.autorun(function () {
    self.subscribe('cityList');
  });
});

Template.cityList.helpers({

  cityList: function () {
    var list = CityList.find({}, {limit: 20});
    console.log(CityList);
    return list;
  }
});
