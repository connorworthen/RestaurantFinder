class FavoritesController < ApplicationController

  skip_before_action :authorized, only: [:update]

  def update
    favorite.update_attributes(:favorited, [:true])
    favrotie.save
    render :json => favorite, status: :updated
  end
end
