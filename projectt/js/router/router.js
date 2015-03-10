var App = App || {};

App.Routers = Backbone.Router.extend({

	routes:{
		''			: 'Login',
		'User'		: 'User'
	},
	Login : function(){
		App.auth_usr.render();
	}
});

App.auth_usr = new App.Auth_usr();
App.router = new App.Routers();
Backbone.history.start(); 