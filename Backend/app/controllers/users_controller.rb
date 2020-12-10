class UsersController < ApplicationController

  skip_before_action :authorized, only: [:create, :login, :update]

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: {error: "Invalid username or password"}
    end
  end

  def login
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      token = encode_token({user_id: @user.id})
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
    else
      render json: {error: "Invalid login username or password don't match.", status: :unauthorized}
    end
  end

  # def update
  #   # binding.pry
  #   @user = User.find(current_user)
  #   if @user.update(favorites_attributes: [:favorited] == true)
  #     render json: { user: UserSerializer.new(@user, @favorite), jwt: token }, status: :accepted
  #   else
  #     render json: {error: "Something went wrong. Please try again.", status: :unauthorized}
  #   end
  # end


  private

  def user_params
    params.require(:user).permit(:username, :password)
    # favorites_attributes: [:restaurant_id, :favorited, :used_id]
  end

end