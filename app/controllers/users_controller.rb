class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    #post signup
    def create
        user = User.create!(user_params)
    end

    private

    def user_params
        params.permit(:name, :password, :password_authentification)
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found 
    end

end
