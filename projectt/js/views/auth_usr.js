App.Auth_usr = Backbone.View.extend({
	
	el:'#con-tent',
	
	template: _.template($('#login_usr').html()),

	events: {
		'click #btn-signin'   : 'login',
		'click #btn-register' : 'register', 
	},
	
	render: function(){
		//$('#content').removeclass
		this.$el.html(this.template); 
	},

	login: function(evt){
		if(evt) evt.preventDefault();
		var user = {
			mail: $('#inputEmail').val(),
			pass: $('#inputPass').val(),
		};
		var login = App.session_collection.login(user);
		console.log(user);
		if (user.mail && user.pass){
			if(login){
				this.userLogueado = App.usr_collection.findWhere(user);

				if(this.userLogueado.get('esAdmin')){
					console.log("so admin");
					location.hash = '#admin-page';
				}else{
					console.log("guest");
					location.hash = '#home';
				}
			}else{
				console.log("no loggeado!");
			}
		}else{
			if(!$('#inputEmail').val()){
				$('#inputEmail').addClass('has-error');
			}
			if(!$('#inputPass').val()){
				$('#inputPass').addClass('has-error');
			}
		}
	},

	register: function(){
		location.hash = '#register';
	},
	logout: function(){
		var logout = app.session_collection.logout();
		console.log(logout, 'saliste con el metodo logout del objeto auth_usr');
		if(logout){
			window.location.href = '';
		}
	}
});
//revisar
App.RegisterView = Backbone.View.extend({
	
	el: '#con-tent',
	
	template: _.template($('#tpl_register').html()),
	
	events: {
		'click #btn-create'	:	'createAccount',
		'click #btn-cancel'	:	'notCreateAccount'
	},

	render: function ()
	{ 
		$('header').remove();
		$('#sidebar_content').addClass('hidden');
		this.$el.html(this.template); 
		return this;	
	},
	
	createAccount: function(evt)
	{
		if (evt) evt.preventDefault();
		var user = {
				email: $('#email_input').val(),
				pswd: $('#pswd_input').val()
			};
		//console.log(this.validate());
		var result = app.user_collection.createNewUser(user);
		console.log(result, 'resultado de la registracion');
		console.log(app.user_collection.models,' models in user_collection');
		if (result) {
			
			window.location.href = '';	
		}else{
			$('.text-danger').removeClass('hidden');
		}
	
	},
	
	notCreateAccount: function ()
	{ 
		window.location.href = ''; 
		
	}
	
});

App.register_view = new App.RegisterView();
App.auth_usr = new App.Auth_usr();