class Api::BoardsController < ApplicationController
    before_action :require_login


    def new
        @board = Board.new

        render :new
    end

    def index
        @boards = current_user.boards

        render :index
    end

    def show
        @board = Board.find_by(id: params[:id])
        if @board
            render :show
        else
            render json:["The board you are looking does not exist."], status: 404
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
        if current_user.id == @board.owner_id && @board.update(board_params)
            render :show
        else
            render json:["Unable to update the board"], status: 422
        end        
    end

    def destroy
        @board = Board.find_by(id: params[:id])

        if current_user.id == @board.owner_id && @board
            if @board.destroy
                render :index
            else
                render json: @board.errors.full_messages, status: 422
            end
        elsif @board
            render json:["You are do not have permission to delete the board."], status: 403
        else
            render json:["The board you are looking does not exist."], status: 404
        end
        
    end

    private

    def board_params
        params.require(:board).permit(:title, :owner_id, :visibility)        
    end

end