class ChatRoomsController < ApplicationController

	def index
		@chatrooms = ChatRoom.all
	end


	def show
		@chatroom = ChatRoom.find(params[:id])
	end

end
