var PostFormView = Backbone.View.extend({
	template: _.template($('#post-form-template').html()),
	initialize: function(options) {
		_.bindAll(
			this,
			'onSubmitClick'
		);

		var data = {};
		if(!this.model) {
			this.model = new PostModel();
		}
		this.$el = $(this.template(data));
		// Special backbone $ notation
		// same as:
		// this.$submit = this.$el.find('.submit');
		this.$submit = this.$('.submit');
		/////								//////
		this.$error = this.$('.error');
		this.$error.hide();
		this.$title = this.$('.title');
		this.$body = this.$('.body');
		this.$pinned = this.$('.pinned');

		this.$submit.on('click', this.onSubmitClick);
	},

	onSubmitClick: function() {
		this.$error.hide();
		this.model.set({
			title: this.$title.val(),
			body: this.$body.val(),
			pinned: this.$pinned.is(':checked')
		});
		// ensuring data is valid, checks data in PostModel.js
		// 'validationError' is special backbone syntax
		if(!this.model.isValid()) {
			this.$error.text(this.model.validationError).show();
		}
		else {
			console.log(this.model.attributes)
			// VERY IMPORTANT!!!! save() takes legwork out of post requests
			this.model.save();
			// triggering a submit event to anyone who's listening to PostFormView.js
			// aka AdminView.js line 15
			this.trigger('submit', this.model);
		}
	}
});