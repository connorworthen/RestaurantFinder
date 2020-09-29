class RestaurantsController < ApplicationController

  def index
    restaurant = Restaurant.all
    render json: restaurant
  end
  
  def show
    restaurant = Restaurant.find(params[:id])
    render json: restaurant
  end
end
