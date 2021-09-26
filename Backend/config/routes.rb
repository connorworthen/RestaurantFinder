Rails.application.routes.draw do
  post '/signup', to: 'users#create' 
  post '/login', to: 'users#login'
  get 'auto_login', to: 'users#auto_login'

  resources :restaurants, only: [:index, :create]
  resources :users, only: [:create, :login, :update]
  resources :favorites, only: [:update]

  resources :users do
    resources :favorites, only: [:update]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
