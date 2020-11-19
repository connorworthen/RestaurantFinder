require 'pry'
class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def create
    user = User.create(user_params)
    user.save
    render :json => user, status: :accepted
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
  
end