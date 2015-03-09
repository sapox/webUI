var App = App || {};

App.Router = Backbone.Router.extend({

	routes:{
		''			: 'Login',
		'User'		: 'User'
	},
	Login : function(){
		this.render(App.LoginView,"");
	}
});