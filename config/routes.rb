Rails.application.routes.draw do
  devise_for :views
  devise_for :users
  root "lists#index"

  resources :users, only:[:new,:create]

  
end
