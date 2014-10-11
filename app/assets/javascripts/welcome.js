$(document).ready(function(){
	// automatically be at the bottom of the chat when you login to the page
	var chatBox = $('.chat-messages-container');
	chatBox.scrollTop(chatBox.prop("scrollHeight"));

	$('.send-button').on('click',function(){
		sendMessage();
	});

	$(document).keypress(function(event){
		if (event.which == 13){
			sendMessage();
		}
	});

	// PrivatePub.subscribe('/messages/new', function(data, channel) {
	// 	debugger;
	// chatBox.scrollTop(chatBox.prop("scrollHeight"));

 //  	chatBox.append('<div>'+data.message+'</div>');
 //  	// scrolls to the bottom of the div to display the next message
	// 	chatBox.scrollTop(chatBox.prop("scrollHeight"));
	// });

});

function sendMessage(){
	var message = $('.new-message').val();

	var request = $.ajax({
		url: '/messages',
		type: 'POST',
		data: {message: {content: message}},
		dataType: 'json'
	});

	request.done(function(response){
		$('.new-message').val('');
		$('.chat-messages-container').append('<div>'+response.content+'</div>');

		// scrolls to the bottom of the div to display the next message
		var chatBox = $('.chat-messages-container');
		chatBox.scrollTop(chatBox.prop("scrollHeight"));
	});
}