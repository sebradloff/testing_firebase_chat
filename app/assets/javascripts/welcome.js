$(document).ready(function() {
    var myFirebaseRef = new Firebase('https://scorching-torch-5624.firebaseio.com/');
    // automatically be at the bottom of the chat when you login to the page
    var chatBox = $('.chat-messages-container');

    chatBox.scrollTop(chatBox.prop("scrollHeight"));

    $('.send-button').on('click', function() {
        // sendMessage();
    });

    myFirebaseRef.once('value', function(snapshot) {
        if (snapshot.val() == null) {
        	$('.chat-messages-container').append('<div>Be the first to comment!</div>');
      	} else{
      		var message = snapshot.val();
      		$('.new-message').val('');
	        $('.chat-messages-container').append('<div>' + message.content + '</div>');
	        var chatBox = $('.chat-messages-container');
	        chatBox.scrollTop(chatBox.prop("scrollHeight"));
	        debugger;
      	}
    });

    myFirebaseRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        $('.new-message').val('');
        $('.chat-messages-container').append('<div>' + message.content + '</div>');
        var chatBox = $('.chat-messages-container');
        chatBox.scrollTop(chatBox.prop("scrollHeight"));
    });

    $(document).keypress(function(event) {

        if (event.which == 13) {
            var message = $('.new-message').val();


            // myFirebaseRef.remove();
            myFirebaseRef.push({
                content: message
            });

        }
    });




});

function sendMessage() {
    // var message = $('.new-message').val();

    // var myFirebaseRef = new Firebase('https://scorching-torch-5624.firebaseio.com/');
    // // myFirebaseRef.remove();
    // myFirebaseRef.push({
    //     content: message
    // });


    // myFirebaseRef.on('child_added', function(snapshot) {
    //     var message = snapshot.val();
    //     $('.new-message').val('');
    //     $('.chat-messages-container').append('<div>' + message.content + '</div>');
    //     var chatBox = $('.chat-messages-container');
    //     chatBox.scrollTop(chatBox.prop("scrollHeight"));
    // });

    // var request = $.ajax({
    // 	url: '/messages',
    // 	type: 'POST',
    // 	data: {message: {content: message}},
    // 	dataType: 'json'
    // });

    // request.done(function(response){
    // 	$('.new-message').val('');
    // 	$('.chat-messages-container').append('<div>'+response.content+'</div>');

    // 	// scrolls to the bottom of the div to display the next message
    // 	var chatBox = $('.chat-messages-container');
    // 	chatBox.scrollTop(chatBox.prop("scrollHeight"));
    // });
}