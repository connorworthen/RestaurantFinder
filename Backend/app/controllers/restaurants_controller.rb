class RestaurantsController < ApplicationController

  def index
    restaurants = Restaurant.all
    render json: restaurants
  end

  def show
  end

  private

  def restaurant_params
    params.require(:restaurant).require(:name, :address, :category, :closing_time, :opening_time, :price_range, :image)
  end
  
end


# render json: RestaurantSerializer.new(restaurant)