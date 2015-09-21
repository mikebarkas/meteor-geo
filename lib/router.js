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
