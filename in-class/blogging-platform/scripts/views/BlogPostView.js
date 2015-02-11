 var BlogPostView = Backbone.View.extend({
	el: '#blog-post-view',
	initialize: function(options) {
		_.bindAll(
			this,
			'render'
		);

		this.$title = this.$('.post-title');
		this.$body = this.$('.post-body');
	},
	render: function() {
		// with (..)$.html() - the user can inject html or JS code and hijack your site!
		// use (..)$.text() instead - treats whatever it gets as literal string text

		// Injection ex)
		// Body: 
		// <script type='text/javascript'>
		// 	window.location = 'http://shady-site.com/steal-yo-money';
		// </script>

		this.$title.text(this.model.get('title'));
		this.$body.text(this.model.get('body'));
		// this.$title.html(this.model.get('title'));
		// this.$body.html(this.model.get('body'));
	}
});