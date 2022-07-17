Rails.application.routes.draw do
  
  resources :pharmacists
  resources :pharmacies
  resources :users
  resources :requests, only: [:index, :create]

  post "reply", to: "requests#sms"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
