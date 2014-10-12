class ChatRoomsController < ApplicationController

	def index
		@chatrooms = ChatRoom.all
	end

	def new

	end

	def show
		@chatroom = ChatRoom.find(params[:id])
	end

end
