var App = App || {};

App.CurrentUser = new App.User({});

var router =  new App.Router();
Backbone.history.start(); 

function mostrar(){
		if($('#loggeo').text()==="Login"){
				$('.login').show("fast",function(){
					$('#loggeo').text("hide");
				});}else if($('#loggeo').text()==="hide"){
				$('.login').hide("fast", function(){
					$('#loggeo').text("Login");
				});
			}
}