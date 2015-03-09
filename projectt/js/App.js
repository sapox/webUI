var App = App || {};

App.CurrentUser = new App.User({});

var router =  new App.Router({});
Backbone.history.start(); 