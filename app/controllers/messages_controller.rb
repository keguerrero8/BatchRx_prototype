class MessagesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        messages = Message.all
        render json: messages, status: :ok
    end

    def create
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    private

    def message_params
        params.permit(:phoneNumber, :text)
    end

    def render_invalid
        render json: {errors: invalid.record.errors.full_messages}, status: unprocessable_entity
    end
end
