class RestaurantsController < ApplicationController

  def index
    restaurants = Restaurant.all
    render json: restaurants
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


# render json: RestaurantSerializer.new(restaurant)