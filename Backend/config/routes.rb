Rails.application.routes.draw do
  # resources :restaurants, only: [:create, :index, :show]
  # resources :users, only: [:create]
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create' 
  get '/login', to: 'sessions#login'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  resources :restaurants
  resources :users
  resources :likes
  resources :menus
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
