var AdminView = Backbone.View.extend({
	el: '#admin-view',
	// gets passed post collections AND router thru options argument 
	// see AppView.js line 43
	initialize: function(options) {
		_.bindAll(
			this,
			'onNewPost'
		);

		this.posts = options.posts;
		this.router = options.router;

		this.formView = new PostFormView();
		this.$el.append(this.formView.$el);
		// event listener for PostFormView.js line 46
		this.formView.on('submit', this.onNewPost);

	},
	onNewPost: function(model) {
		this.posts.add(model);
		this.router.navigate('blog/'+model.cid, {trigger: true});
	}
});