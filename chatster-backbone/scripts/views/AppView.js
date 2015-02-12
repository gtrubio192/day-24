var AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function(){
		this.chatCollection = new chatCollection();

		var self = this;

		var Router = Backbone.Router.extend({
			routes:{
				'chat-room': 'chatRoom',
				'sign-in': 'signIn'
			},

			chatRoom: function(){
				$('.pages').hide();
				self.messageView.$el.show();
			},

			signIn: function(){
				$('.pages').hide();
				self.loginView.$el.show();
			}
		});

		var approuter = new Router();

		this.messageView = new MessageView({
			messages: this.chatCollection,
			router: approuter
		});

		this.loginView = new LoginView({
			messages: this.chatCollection,
			router: approuter
		});

		this.posts.fetch();

		Backbone.history.start();
	}
});

	