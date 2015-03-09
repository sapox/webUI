var App = App || {};

App.LoginView =  Backbone.View.extend({

  el: ".loggeado",
  events: {
		'click #btnLogin'	: 'Home',
		'click #btnSignUp'	: 'SignUp'
	},
  render: function(){
	  var template = _.template( $("#loginn").html(), {} );
  },
  Home: function(){
  	// 
  	var user = {
      user  : $('#userName').val(),
      password  : $('#userPass').val()
    };

    var exists = App.AllUsers.where({ user: user.user, password: user.password });
    
    if(exists.length>0)
    {
      App.CurrentUser = exists[0];
      router.Home();
    }
    else
    {
      App.Message('Ups, username or password are incorrect!');
           
    }	;
  },
  SignUp: function(){
    router.SignUp();
  }

});