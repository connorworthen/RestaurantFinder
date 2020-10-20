class RestaurantsController < ApplicationController

  def index
    restaurants = Restaurant.all
    render json: restaurants
  end
  
  def create
    restaurant = Restaurant.new(restaurant_params)
    if restaurant.save
      render json: restaurant
    else
      render json: errors: {game.errors.full_messages}, status: 422
    end
  end

  def show
    restaurant = Restaurant.find(params[:id])
    render json: restaurant, only: [:name, :category]
  end

  private

  def restaurant_params
    params.require(:restaurant).require(:name, :address, :category, :closing_time, :opening_time, :price_range)
  end
  
end


# render json: RestaurantSerializer.new(restaurant)