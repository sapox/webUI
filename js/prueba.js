function mostrar(){
			if($('#loggeo').text()==="Login"){
				$('.login').show("fast",function(){
					$('#loggeo').text("hide");
				});
			}else if($('#loggeo').text()==="hide"){
				$('.login').hide("fast", function(){
					$('#loggeo').text("Login");
				});
			}
		}
	(function($){

		//modelos
		var User = Backbone.Model.extend({
			defaults: function(){
				return{
					name:'',
					pass:''
				}
			}
		});
		var Tweet = Backbone.Model.extend({
			defaults: function(){
				return{
					author:'',
					status:''
				}
			}

		});
		var TweetList = Backbone.Collection.extend({
			model: Tweet
		});

		var tweets = new TweetList();
		//vista
		var TweetView = Backbone.View.extend({
			model: new Tweet(),
			tagName: 'div',
			initialize: function(){
				this.template = _.template($('#tweet-template').html());
			},
			render: function(){
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			}
		});
		//https://www.youtube.com/watch?v=2BDGBJUtAmo  (29:51)
		var TweetsView = Backbone.View.extend({
			model: tweets,
			el: $('#tweets-container'),
			initialize: function(){
				this.model.on('add', this.render, this);
			},
			render: function(){
				var self = this;
				self.$el.html('');
				_.each(this.model.toArray(), function(tweet, i){
					self.$el.append((new TweetView({model: tweet})).render().$el);
				});
					return this;
			}
		});

		$(document).ready(function(){
			$('#new-tweet').submit(function(ev){
				var tweet = new Tweet({author:$('#author-name').val(), status:$('#status').val()});
				tweets.add(tweet);
				console.log(tweets.toJSON());
				
				return false;
			});
			var appView = new TweetsView();
		});
		

})(jQuery);