Rails.application.routes.draw do
  
  resources :pharmacists
  resources :pharmacies, only: [:index]
  # resources :users, only: [:show]
  resources :requests, only: [:index, :create]

  post "reply", to: "requests#sms"
  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"
  get "me", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
