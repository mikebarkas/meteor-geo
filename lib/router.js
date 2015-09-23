FlowRouter.route('/', {
    name: 'home',
    action: function() {
        console.log("This is my home page.");
        BlazeLayout.render('layout', {main: 'places'});
    }
});
FlowRouter.route('/two', {
    name: 'two',
    action: function() {
        console.log("This is my two page:");
        BlazeLayout.render('layout', {main: 'two'});
    }
});
FlowRouter.route('/citylist', {
    name: 'citylist',
    action: function() {
        console.log("This is my city list page:");
        BlazeLayout.render('layout', {main: 'cityList'});
    }
});
