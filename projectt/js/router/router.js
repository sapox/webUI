var App = App || {};

App.Routers = Backbone.Router.extend({

	routes:{
		''			: 'Login',
		'register'  : 'register',
		'User'		: 'User'
	},
	Login : function(){
		App.auth_usr.render();
	},
	register: function ()
	{
		App.register_view.render();
	}
});

App.auth_usr = new App.Auth_usr();
App.router = new App.Routers();
Backbone.history.start(); 