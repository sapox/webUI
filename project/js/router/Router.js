var App = App || {};

App.Router = Backbone.Router.extend({

	routes:{

		'' 					: 'Login',
		'Home' 				: 'Home',		
		'SignUp' 			: 'SignUp',
		'ComicsManagment' 	: 'ComicsManagment',
		'AvailableComics'	: 'AvailableComics',
		'Videos'			: 'Videos',
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
	ComicsManagment:function () { 
    	this.Render(App.ComicsManagmentView,"ComicsManagment");	

		},
	AvailableComics:function () { 
    	this.Render(App.AvailableComicsView,"AvailableComics");	

		},
	Videos:function () { 
    	this.Render(App.VideoComicsView,"Videos");	

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

