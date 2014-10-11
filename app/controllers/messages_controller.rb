class MessagesController < ApplicationController
	
	def index
		@messages = Message.all
	end


	def create
		@message = Message.create(content: message_attributes[:content])
		
	 	respond_to do |format|
      format.json { render json: @message }
    end

	end

	private

	def message_attributes
    params.require(:message).permit(:content)
  end


end
