var App = App || {};

App.UsersCollection = Backbone.Collection.extend({
	url: "js/data/Users.json",
	model: App.User
});