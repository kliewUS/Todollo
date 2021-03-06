class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.create(user_params)
        if @user.save
            login(@user)
            redirect_to api_user_url(@user)
        else
            
           render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user
            render :show
            # render json: @user
        else
            render json:["No user here!"], status: 404
        end
    end


    private
    def user_params
        params.require(:user).permit(:username,:password)        
    end

end
