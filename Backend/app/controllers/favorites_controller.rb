class FavoritesController < ApplicationController
  def create
    current_user.favorites.create(:restaurant_id => params[:restaurant_id])
    render :layout => false
  end
end
