class Api::BoardMembershipsController < ApplicationController
    before_action :require_login

    def index
        @boardMemberships = BoardMembership.all
        render :index
    end

    def show
        @boardMembership = BoardMembership.find_by(id: params[:id])
        @user = User.find_by(id: @boardmembership.user_id)
        if @boardMembership
            render :show
        else
            render json:["This person is not a member of this board."], status: 404
        end
    end    
    
    def create
        @boardmembership = BoardMembership.create(board_membership_params)
        if @boardmembership.save
            render :show
        else
            render json: @boardmembership.errors.full_messages, status: 422
        end
    end

    def delete
        @boardmembership = BoardMembership.find_by(id: params[:id])
        @board = Board.find_by(id: @boardmembership.board_id)

        if !@boardmembership
            render json:["This board member doesn't exist"], status: 404
        elsif current_user.id == @board.owner_id && @boardmembership
            if @boardmembership.destroy
                render :show
            else
                render json: ["Board Membership deletion failed"], status: 422
            end            
        elsif @boardmembership
            render json:["You do not have permission to perform this action"], status: 403
        end        
    end

    private

    def board_membership_params
        params.require(:board_membership).permit(:board_id, :user_id)        
    end    

end
