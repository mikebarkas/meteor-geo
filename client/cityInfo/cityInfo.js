Template.cityInfo.onCreated(function () {
  this.subscribe('cityList');
});

Template.cityInfo.onRendered(function () {
  Session.get('citySearch', '');
});

Template.cityInfo.events({
  'keyup input': function (event) {
    var searchString = $(event.currentTarget).val();
    Session.set('citySearch', searchString);
  }
});

Template.cityInfo.helpers({
  cities: function () {
    var citySearch = Session.get('citySearch'),
      cities = Places.find({'city': {$regex: citySearch, $options: 'i'}}, {
        fields: {'_id': 1, 'city': 1, 'state': 1},
        sort: {'city': 1}
      });
      return cities;
  }

});
