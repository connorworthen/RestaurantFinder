require 'pry'
class RestaurantsController < ApplicationController

  def index
    render json: Restaurant.all
  end

  def create
    restaurant = Restaurant.create(restaurant_params)
    restaurant.save
    render :json => restaurant, status: :accepted
  end

  def show
  end

  private

  def restaurant_params
    params.permit(:name, :address, :category, :closing_time, :opening_time, :price_range, :image)
    # , menu_attributes: [:appetizers, :entrees, :desserts, :drinks, :description]
  end
  
end
