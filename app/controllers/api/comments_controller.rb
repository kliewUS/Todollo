class Api::CommentsController < ApplicationController
    before_action :require_login

    def index
        @comments = Comment.all

        render :index
    end

    def show
        @comment = Comment.find_by(id: params[:id])
        
        render :show
    end

    def create
        @comment = Comment.create(comment_params)

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])

        if @comment.destroy
            render :show
        else
            render json: ["Comment deletion failed"], status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if @comment.update(comment_params)
            render :show
        else
            render json:["Unable to update the comment"], status: 422 
        end 
    end

    def comment_params
        params.require(:comment).permit(:body, :user_id, :card_id)        
    end     
end
