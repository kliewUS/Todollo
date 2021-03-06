class Api::BoardMembershipsController < ApplicationController
    before_action :require_login

    def index
        @boardMemberships = BoardMembership.all
        render :index
    end

    def show
        @boardmembership = BoardMembership.find_by(id: params[:id])
        # @user = User.find_by(id: @boardmembership.user_id)
        if @boardmembership
            render :show
        else
            render json:["This person is not a member of this board."], status: 404
        end
    end    
    
    def create
        @bdmExist = BoardMembership.find_by(board_id: params[:board_membership][:board_id], user_id: params[:board_membership][:user_id])
        if @bdmExist
            render json:["This person is already a member of this board"], status: 422
        else
            @boardmembership = BoardMembership.create(board_membership_params)
            if @boardmembership.save
                render :show       
            else
                render json: @boardmembership.errors.full_messages, status: 422
            end            
        end
    end

    def destroy
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
