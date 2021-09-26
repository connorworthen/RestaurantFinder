class UsersController < ApplicationController

  skip_before_action :authorized, only: [:show, :create, :update, :index]
  
  def show
    user = User.find_by(id: params[:id])
    render json: user
  end

  def index
    user = User.all
    render json: user
  end

  def create
    user = User.create(user_params)
    if user.valid?
      token = encode_token(user_id: user.id)
      render json: { user: UserSerializer.new(user), jwt: token }
    else
      render json: {error: "Email is already tied to an exisiting account."}
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: { user: user, success: "updated" }
    else
      render json: { error: "Unable to update profile. Please try again."}
    end
  end

  private 
  
  def user_params
    params.permit(:username, :password)
  end

end