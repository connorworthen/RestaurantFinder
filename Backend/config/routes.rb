Rails.application.routes.draw do
  # get 'favorites/update'
  # resources :users, only: [:create, :login]
  post '/signup', to: 'users#create' 
  post '/login', to: 'users#login'
  # get '/auto_login', to: 'users#login'
  # delete '/logout', to: 'sessions#destroy'
  
  resources :restaurants
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
