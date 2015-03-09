var App = App || {};

App.Router = Backbone.Router.extend({

	routes:{

		'' 					: 'Login',
		'Home' 				: 'Home',		
		'SignUp' 			: 'SignUp',
		'User'				: 'User'

	},

	Login : function () { 
		this.Render(App.LoginView,"");
     },
    
    Home : function () {     	 
    	this.Render(App.HomeView,"Home");  
     },

    SignUp : function () { 
    	this.Render(App.SignUpView,"SignUp");	

		},
	User:function () { 
    	this.Render(App.UserView,"User");	

		},

	Render:function(viewModel ,action){		
		var view = new viewModel;
		view.render();
    	router.navigate(action,{Trigger: true});  

	}	 

});