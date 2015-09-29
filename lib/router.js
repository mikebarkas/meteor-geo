FlowRouter.route('/', {
    name: 'home',
    action: function() {
        console.log("This is my home page.");
        BlazeLayout.render('layout', {main: 'places'});
    }
});
FlowRouter.route('/city-info', {
    name: 'city-info',
    action: function() {
        BlazeLayout.render('layout', {main: 'cityInfo'});
    }
});
FlowRouter.route('/citylist', {
    name: 'citylist',
    action: function() {
        console.log("This is my city list page:");
        BlazeLayout.render('layout', {main: 'cityList'});
    }
});
