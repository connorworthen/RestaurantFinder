Rails.application.routes.draw do
  # resources :restaurants, only: [:create, :index, :show]
  # resources :users, only: [:create]
  
  resources :restaurants
  resources :users
  resources :likes
  resources :menus
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
