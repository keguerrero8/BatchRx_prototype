class PharmaciesController < ApplicationController
    before_action :require_admin_authorization

    def index
        # render json: Pharmacy.includes(:pharmacists).all
        render json: Pharmacy.all
    end

    private

    def require_admin_authorization
        user = User.find_by(id: session[:user_id])
        unless user
            render json: {errors: ["No admin logged in"]}, status: :unauthorized
        end
    end

end
