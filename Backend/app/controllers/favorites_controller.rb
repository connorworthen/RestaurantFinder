class FavoritesController < ApplicationController
  
  skip_before_action :authorized, only: [:update]

  def update
    @user = User.find(current_user)
    @user.update(favorites_attributes: [:favorited] == true)
      render json: { user: UserSerializer.new(@user, @favorite), jwt: token }, status: :accepted
    else
      render json: {error: "Something went wrong. Please try again.", status: :unauthorized}
    end
  end
end
