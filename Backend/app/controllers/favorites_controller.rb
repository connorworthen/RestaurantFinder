class FavoritesController < ApplicationController
  def update
    favorite = Favroite.where(restaurant: Restaurant.find(params[:restaurant]), user: current_user)
    if favorite == []
      Favroite.create(restaurant: Restaurant.find(params[:restaurant]), user: current_user)
      @favorite_exists = true
    else
      favorite.destroy.all
      @favorite_exists = false
    end
    respond_to do |format|
      format.html {}
      format.js {}
    end
  end
end
