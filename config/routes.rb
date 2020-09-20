Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :new, :show, :create]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:index, :show, :create, :update, :destroy]
    resources :board_memberships, only: [:show, :index, :create, :destroy]
    resources :lists, only: [:index, :create, :destroy, :update, :show]
    resources :cards, only: [:show, :index, :create, :destroy, :update]
    resources :comments, only: [:show, :index, :create, :destroy, :update]
    resources :labels, only: [:show, :index, :create, :destroy, :update]
    resources :card_labels, only: [:show, :index, :create, :destroy]
  end


  root to: 'static_pages#root' 

end
