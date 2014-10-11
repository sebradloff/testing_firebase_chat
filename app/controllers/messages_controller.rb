class MessagesController < ApplicationController

	


	def index
		@messages = Message.all
	end


	def create
		# base_uri = 'https://scorching-torch-5624.firebaseio.com/'
		# firebase = Firebase::Client.new(base_uri)

		@message = Message.create(content: message_attributes[:content])
		# response = firebase.push("messages", { message: @message.content})
	 	
	 	respond_to do |format|
      format.json { render json: @message }
    end
	end

	private

	def message_attributes
    params.require(:message).permit(:content)
  end


end
