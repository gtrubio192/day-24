var loginView = Backbone.View.extend({
	el: "#sign-in",

	initialize: function(){
		_.bindAll(
			this,
			'onLoginClick',
			'onLoginEnter'
			);

		this.$userName = $('login-text');
		this.$login = $('#login');

		this.$login.on('click', this.onLoginClick);
		this.$login.on('keyup', this.onLoginEnter);
		this.chatCollection.on('add', this.onMessageAdded);	
	},

	function onLoginClick(){
		name = this.$userName.val();
		if(name == '')
		{
			alert("Please enter user name");
		}
		else{
			// $('#chat-room').show();
			// $('#sign-in').hide();
		}
	},
	
	function onLoginEnter(e){
	// take input when user hits enter key
	    if ( e.which == 13){
	    	onLoginClick();
	    }
	    else
	    	return;
    }
	
})
