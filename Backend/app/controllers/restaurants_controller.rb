require 'pry'
class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all
  end

  def create
    # binding.pry
    restaurant = Restaurant.create(restaurant_params)
    restaurant.save
    render :json => RestaurantSerializer.new(restaurant), status: :accepted
  end

  def show
  end

  private

  def restaurant_params
    # params.require(:restaurant).permit(:name, :address, :category, :closing_time, :opening_time, :price_range, :image)
    params.permit(:name, :address, :category, :closing_time, :opening_time, :price_range, :image)
  end
  
end


# render json: RestaurantSerializer.new(restaurant)