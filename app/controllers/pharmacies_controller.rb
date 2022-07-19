class PharmaciesController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        if user
            render json: Pharmacy.all
        else
            render json: {errors: ["No user logged in"]}, status: :unauthorized
        end
    end

end
