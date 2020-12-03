require 'pry'
class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :login, :show, :update]

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

  def auto_login
    render json: @user
  end

  def destroy

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end