var AppView = Backbone.View.extend({
	el: '#app',
	initialize: function() {
		this.posts = new PostCollection();

		var self = this;

		var Router = Backbone.Router.extend({
			routes: {
				'blog': 		'blog',
				// expect thing after the url hash to have the word 'blog/' followed by an id
				// :id is now a variable being passed to blogPost()
				'blog/:id': 	'blogPost',
				'admin': 		'admin',
				// * our defualt, aka catch all if no other url# matches
				'*page': 		'blog'
			},

			blog: function() {
				self.hideAllPages();
				self.blogView.$el.show();
			},

			blogPost: function(cid) {
				self.hideAllPages();
				self.blogPostView.model = self.posts.get(cid);
				self.blogPostView.render();
				self.blogPostView.$el.show();
			},

			admin: function() {
				self.hideAllPages();
				self.adminView.$el.show();
			}
		});

		var appRouter = new Router();

		this.blogView = new BlogView({
			posts: this.posts,
			router: appRouter
		});
		this.blogPostView = new BlogPostView({
			router: appRouter
		});
		this.adminView = new AdminView({
			posts: this.posts,
			router: appRouter
		});

		this.posts.fetch();

		Backbone.history.start();
	},

	hideAllPages: function() {
		$('.page-view').hide();
	}
});