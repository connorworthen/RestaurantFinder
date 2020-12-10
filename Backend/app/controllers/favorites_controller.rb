class FavoritesController < ApplicationController
  
  skip_before_action :authorized, only: [:update]

  def update
    if Favorite.create(favorited: @restaurant, user: current_user)
      redirect_to @restaurant, notice: 'Restaurant has been favorited'
    else
      redirect_to @restaurant, alert: 'Something went wrong...'
    end
  end
end
