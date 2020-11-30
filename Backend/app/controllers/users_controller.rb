require 'pry'
class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.create(user_params)
    # binding.pry
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: {error: "Invalid username or password"}
    end
  end

  # def login
  #   @user = User.find_by(email: params[:email])
  #   if @user && @user.authenticate(params[:password])
  #     token = encode_token({user_id: @user.id})
  #     render json: {user: @user, token: token}
  #   else
  #     render json: {error: "Invalid username or password"}
  #   end
  # end


  # def auto_login
  #   render json: user
  # end

  private

  def user_params
    params.require(:user).permit(:username, :password)
    # params.fetch(:user, {}).permit(:username, :password)
  end

end