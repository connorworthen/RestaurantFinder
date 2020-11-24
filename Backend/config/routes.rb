Rails.application.routes.draw do
  resources :users, only: [:create]
  post '/signup', to: 'users#create' 
  post '/login', to: 'users#login'
  # get '/auto_login', to: 'users#login'
  # delete '/logout', to: 'sessions#destroy'
  
  resources :restaurants
  resources :users
  resources :likes
  resources :menus
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
