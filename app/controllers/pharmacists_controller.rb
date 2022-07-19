class PharmacistsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    before_action :require_admin_authorization

    def create
        pharmacy = Pharmacy.find_by(id: params[:pharmacy_id])
        pharmacist = pharmacy.pharmacists.create!(pharmacist_params)
        render json: pharmacist, status: :created
    end

    def destroy 
        pharmacist = Pharmacist.find_by(id: params[:id])
        pharmacist.destroy
        head :no_content
    end

    private

    def require_admin_authorization
        user = User.find_by(id: session[:user_id])
        unless user
            render json: {errors: ["No admin logged in"]}, status: :unauthorized
        end
    end

    def pharmacist_params
        params.permit(:phone_number, :name)
    end

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
