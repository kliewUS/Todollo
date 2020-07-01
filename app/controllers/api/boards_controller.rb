class Api::BoardsController < ApplicationController
    before_action :require_login

    def index
        @boards = current_user.owned_boards
        @boardMemberships = current_user.board_memberships

        render :index
    end

    def show
        @board = Board.find_by(id: params[:id])
        @board_members = @board.members.pluck(:id) if @board
        
        if @board && !@board.visibility && (!@board_members.include?(current_user.id) || current_user.id != @board.owner_id)
            render json:["You do not have permission to view this board"], status: 403
        elsif @board
            render :show
        else
            render json:["This board does not exist."], status: 404
        end
    end

    def create
        @board = Board.create(board_params)
        @board.owner_id = current_user.id

        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end

    end

    def update
        @board = Board.find_by(id: params[:id])

        if !@board
            render json:["Unable to update the board"], status: 422            
        elsif current_user.id == @board.owner_id && @board.update(board_params)
            render :show
        elsif @board.update(board_params)
            render json:["You do not have permission to update this board"], status: 403 
        end
      
    end

    def destroy
        @board = Board.find_by(id: params[:id])

        if !@board
            render json:["The board you are trying to delete does not exist."], status: 404
        elsif current_user.id == @board.owner_id && @board
            if @board.destroy
                render :show
            else
                render json: ["Board deletion failed"], status: 422
            end            
        elsif @board
            render json:["You are not authorized to delete this board."], status: 403
        end


    end

    private

    def board_params
        params.require(:board).permit(:title, :owner_id, :visibility)        
    end

end
