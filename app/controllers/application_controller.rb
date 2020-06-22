class ApplicationController < ActionController::Base

    #CRILL

    helper_method :current_user, :logged_in?

    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def require_login 
        unless logged_in? 
           render json: ["You are not logged in!"], status: 401
        end 
    end 

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user 
    end 

    def logout
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil
        @current_user = nil
    end 

    def logged_in?
        !!current_user
    end 

        


end
