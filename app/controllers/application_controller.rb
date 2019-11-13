class ApplicationController < ActionController::Base
  # respond_to :html, :json, :xml

  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name, :last_name, :email, :password)}
  end

  def after_sign_in_path_for(resource)
    stored_location_for(resource) || home_path
  end

end
