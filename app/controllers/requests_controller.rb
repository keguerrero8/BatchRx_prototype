require './config/environment'

class RequestsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        requests = Request.all
        render json: requests, status: :ok
    end

    def create
        boot_twilio
        @client.messages.create(
            messaging_service_sid: "MG0763d62b439311bc987e3302129f9dad", 
            to: request_params["phone_number"],
            body: "Hello there, you requested #{request_params["med_name"]}"
        )
        render json: {message: "success"}
    end

    def sms
        message_body = params["Body"]
        from_number = params["From"]
        boot_twilio
        @client.messages.create(
            from: Rails.application.credentials.twilio_number,
            to: from_number,
            body: "Recieved your text from #{from_number}. Here is the message back: #{message_body}"
        )
    end

    private

    def boot_twilio
        account_sid = Rails.application.credentials.twilio_sid
        auth_token = Rails.application.credentials.twilio_token
        @client = Twilio::REST::Client.new(account_sid, auth_token) 
    end

    def request_params
        params.permit(:phone_number, :med_name)
    end

    def render_invalid
        render json: {errors: invalid.record.errors.full_messages}, status: unprocessable_entity
    end
end

        
