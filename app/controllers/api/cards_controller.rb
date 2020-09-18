class Api::CardsController < ApplicationController
    before_action :require_login

    def index
        @cards = Card.all

        render :index
    end

    def show
        @card = Card.find_by(id: params[:id])
        
        render :show
    end

    def create
        @card = Card.create(card_params)

        @card.description = ""

        # @card.list_id = params[:list_id];

        if @card.save
            render :show
        else
            render json: @card.errors.full_messages, status: 422
        end
    end

    def destroy
        @card = Card.find_by(id: params[:id])

        if @card.destroy
            render :show
        else
            render json: ["Card deletion failed"], status: 422
        end
    end

    def update
        @card = Card.find_by(id: params[:id])

        if @card.update(card_params)
            render :show
        else
            render json:["Unable to update the card"], status: 422 
        end 
    end

    def card_params
        params.require(:card).permit(:title, :description, :list_id)        
    end    

end
