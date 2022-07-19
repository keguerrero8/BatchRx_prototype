class PharmacistsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def create
        user = User.find_by(id: session[:user_id])
        if user
            pharmacy = Pharmacy.find_by(id: params[:pharmacy_id])
            pharmacist = pharmacy.pharmacists.create!(pharmacist_params)
            render json: pharmacist, status: :created
        else
            render json: {errors: ["No admin logged in"]}, status: :unauthorized
        end
    end

    private

    def pharmacist_params
        params.permit(:phone_number, :name)
    end

    def render_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
