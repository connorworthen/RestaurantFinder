Rails.application.routes.draw do
  post '/signup', to: 'users#create' 
  post '/login', to: 'users#login'

  resources :restaurants
  resources :users

  resources :restaurants, only: [:index, :show] do
    resources :users, only: [:favorite]
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
