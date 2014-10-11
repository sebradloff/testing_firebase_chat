class MessagesController < ApplicationController
	
	def index
		@messages = Message.all
	end


	def create
		@message = Message.create(content: message_attributes[:content])
		p '*'*100
		p @message
		# PrivatePub.publish_to("/messages/new", "alert('#{@message.content}');")

	end

	private

	def message_attributes
    params.require(:message).permit(:content)
  end

end
