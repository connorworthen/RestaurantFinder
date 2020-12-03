Rails.application.routes.draw do
  # resources :users, only: [:create, :login]
  post '/signup', to: 'users#create' 
  post '/login', to: 'users#login'
  match "favorites/:restaurant_id" => "favorites#create", :as => :favorite
  resources :restaurants
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
