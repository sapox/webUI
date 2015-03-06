var App = App || {};

App.User = Backbone.Model.extend({
	defaults:{
	user: "",
	password: "",
	isAdmin: false
}
});