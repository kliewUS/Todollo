class Api::LabelsController < ApplicationController
    before_action :require_login

    def index
        @labels = Label.all

        render :index
    end

    def show
        @label = Label.find_by(id: params[:id])
        
        render :show
    end

    def create
        debugger
        @label = Label.create(label_params)
        debugger
        puts @label

        if @label.save
            render :show
        else
            render json: @label.errors.full_messages, status: 422
        end
    end

    def destroy
        @label = Label.find_by(id: params[:id])

        if @label.destroy
            render :show
        else
            render json: ["Label deletion failed"], status: 422
        end
    end

    def update
        @label = Label.find_by(id: params[:id])

        if @label.update(label_params)
            render :show
        else
            render json:["Unable to update the label"], status: 422 
        end 
    end

    private

    def label_params
        params.require(:label).permit(:name)        
    end         
end
