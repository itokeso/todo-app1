Rails.application.routes.draw do
  devise_for :views
  devise_for :users
  root "lists#index"

resources :lists , only: [:new,:create,:edit,:update,:destroy]do
  resources :cards , except: [:index]
 end
end
