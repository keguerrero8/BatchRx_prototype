# require 'twilio-ruby'
require './config/environment'

class MessagesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index
        messages = Message.all
        render json: messages, status: :ok
    end

    def create
        boot_twilio
        @client.messages.create(
            from: Rails.application.credentials.twilio_number, 
            to: message_params["phoneNumber"],
            body: message_params["text"]
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

    def message_params
        params.permit(:phoneNumber, :text)
    end

    def render_invalid
        render json: {errors: invalid.record.errors.full_messages}, status: unprocessable_entity
    end
end

#in order to send sms to another phone number they need to be verified first
