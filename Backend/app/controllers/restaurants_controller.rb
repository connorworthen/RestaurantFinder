class RestaurantsController < ApplicationController

  def index
    restaurant = Restaurant.all
    render json: RestaurantSerializer.new(restaurant)
  end
  
  def show
    restaurant = Restaurant.find(params[:id])
    render json: restaurant
  end

  private

  def restaurant_params
    params.require(:restaurant).require(:name, :address, :category, :closing_time, :opening_time, :price_range)
  end
  
end
