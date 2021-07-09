class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_reponse
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized"] }, status: :unauthorized
  end

  def render_unprocessable_entity_reponse(invalid)
    render json: { errors: invalid.records.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: { error: "User not found" }, status: :not_found 
  end
end
