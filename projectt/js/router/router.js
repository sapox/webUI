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

App.router = new App.Routers();
Backbone.history.start(); 