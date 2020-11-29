class UsersController < ApplicationController
  # before_action :authorized, only: [:auto_login]

  def create 
    user = User.create(user_params)
    if user.valid?
      render json: UserSerializer.new(user)
    else
      render json: {message: "Something went wrong"}
    end
  end

  def session
    user = User.find_by(email: params[:user][:email])
    if user.try(:authenticate, params[:password])
      render json: UserSerializer.new(user)
    else
      render json: {message: "No User Found."}
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end

end