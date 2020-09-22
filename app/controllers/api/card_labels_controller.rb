class Api::CardLabelsController < ApplicationController
    before_action :require_login

    def index
        @cardlabels = CardLabel.all
        render :index
    end

    def show
        @cardlabel = CardLabel.find_by(id: params[:id])
        
        render :show
    end    
    
    def create
        @cardlabel = CardLabel.create(card_label_params)

        if @cardlabel.save
            render :show
        else
            render json: @cardlabel.errors.full_messages, status: 422
        end
    end

    def destroy
        @cardlabel = CardLabel.find_by(id: params[:id])

        if @cardlabel.destroy
            render :show
        else
            render json: ["Card Label deletion failed"], status: 422
        end
    end

    private

    def card_label_params
        params.require(:cardLabel).permit(:card_id, :label_id)        
    end    

end
