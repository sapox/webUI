var App = App || {};

App.User = Backbone.Model.extend({
	defaults:{
	mail:'',
	pass:'',
	esAdmin: false
	},
});
