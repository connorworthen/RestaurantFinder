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
    params.permit(:name, :address, :category, :day_of_week, :open, :close, :price, :image)
    # , menu_attributes: [:appetizers, :entrees, :desserts, :drinks, :description]
  end
  
end
