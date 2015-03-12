App.userView = Backbone.View.extend({
	
	el:'#con-tent',
	
	initialize: function ()
	{
		App.session_collection.fetch();
	},
	
	renderProfile: function ()
	{
		
	}
});


App.profileView = Backbone.View.extend({
	
	template: $('#user_profile'), //conectar user profile
	
	render: function ()
	{
		var tpl = _.template(this.template);
	}
});

