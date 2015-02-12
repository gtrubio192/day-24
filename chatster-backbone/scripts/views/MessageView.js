var messageView = Backbone.View.extend({
	el: "#chat-room",

	initialize: function(){
		_.bindAll(
			this,
			'onSubmitButtonClick',
			'onMessageAdded',
			'onRefresh',
			'render'
			);

		this.$chatBox = $('#chat-box').val();
		this.$submit = $('#submit');
		this.$login = $('#login');

		this.$submit.on('click', this.onSubmitButtonClick);
		this.$login.on('click', this.onLoginClick);
		this.chatCollection.on('add', this.onMessageAdded);	
	},

	function onSubmitButtonClick() {
		// 1. Input value
		// console.log("Message: " + $('#chat-box').val());

		// $.post(
		// 	// 'http://tiny-pizza-server.herokuapp.com/collections/austintime',
		// 	'https://kate-gabe-chat.herokuapp.com/chats',
		// 	{
		// 		chat: {
		// 			message: $('#chat-box').val(),
		// 			name: name,
		// 			like: '',
		// 			photo: ''
		// 		}
			
		// 	},
		// 	function(message) {
		// 		console.log("Posting: " + message);
		// 		// $('textarea').html('');
		// 		render(message);
		// 	},
		// 	'json'
		// );
  //  		// this.model.save();

		// $('#chat-box').val('');
	},

	function onRefresh(){

	},

	function onMessageAdded(){

	},

	function render(){

	}

})
