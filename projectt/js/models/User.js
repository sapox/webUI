var App = App || {};

App.User = Backbone.Model.extend({
	defaults:{
	name:'',
	pass:'',
	esAdmin: false
	}
});