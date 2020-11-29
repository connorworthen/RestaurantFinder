require 'pry'
class RestaurantsController < ApplicationController
  
  skip_before_action :authorized, only: [:index, :create]

  def index
    render json: Restaurant.all
  end

  def create
    restaurant = Restaurant.create(restaurant_params)
    restaurant.save
    render :json => restaurant, status: :accepted
  end

  private

  def restaurant_params
    params.permit(:name, :phone_number, :address, :open, :close, :price, :category, :image)
  end
  
end
