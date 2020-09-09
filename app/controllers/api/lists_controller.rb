class Api::ListsController < ApplicationController
    before_action :require_login

    def index
        @lists = List.where(board_id: params[:board_id])

        render :index
    end

    def show
        @list = List.find_by(id: params[:id])
        
        render :show
    end    

    def create
        @list = List.create(list_params)

        @list.board_id = params[:board_id];

        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 422
        end
    end

    def destroy
        @list = List.find_by(id: params[:id])

        if @list.destroy
            render :index
        else
            render json: ["List deletion failed"], status: 422
        end
    end

    def update
        @list = List.find_by(id: params[:id])

        if @list.update(list_params)
            render :index
        else
            render json:["Unable to update the list"], status: 422 
        end      
    end

    def list_params
        params.require(:list).permit(:title, :board_id)        
    end    

end
