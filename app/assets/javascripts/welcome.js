$(document).ready(function() {

        var myFirebaseRef = new Firebase('https://scorching-torch-5624.firebaseio.com/');
        // automatically be at the bottom of the chat when you login to the page
        var chatBox = $('.chat-messages-container');

        chatBox.scrollTop(chatBox.prop("scrollHeight"));

        

        myFirebaseRef.once('value', function(snapshot) {
            if (snapshot.val() == null) {
               $('.chat-messages-container').append('<div>Be the first to comment!</div>');
            } 
        });

        var chatRoomID = location.pathname;

        myFirebaseRef.on('child_added', function(snapshot) {
            if (snapshot.val().chatRoomID == chatRoomID) {
                var message = snapshot.val();
                $('.new-message').val('');
                $('.chat-messages-container').append('<div>' + message.content + '</div>');
                var chatBox = $('.chat-messages-container');
                chatBox.scrollTop(chatBox.prop("scrollHeight"));
            }
        });

        $('.send-button').on('click', function() {
            var e = jQuery.Event("keypress");
            e.which = 13;
            $(document).trigger(e);
        });

        $(document).keypress(function(event) {

            if (event.which == 13) {
                var message = $('.new-message').val();

                // myFirebaseRef.remove();
                var chatRoomID = location.pathname;

                myFirebaseRef.push({
                    chatRoomID: chatRoomID,
                    content: message
                });

            }
        });

});
