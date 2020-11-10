class RestaurantsController < ApplicationController

  def index
    # restaurants = Restaurant.all.with_attached_image
    render json: Restaurant.all.with_attached_image
  end

  def create
    restaurant = Restaurant.create(restaurant_params)
    if restaurant.valid?
      restaurant.save
      render :json => RestaurantSerializer.new(restaurant), status: :accepted
    else
      render :json => status: :unprocessible_entity
    end
  end

  def show
  end

  private

  def restaurant_params
    params.require(:restaurant).require(:name, :address, :category, :closing_time, :opening_time, :price_range, :image)
  end
  
end


# render json: RestaurantSerializer.new(restaurant)