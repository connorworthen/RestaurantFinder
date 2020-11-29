class LikesController < ApplicationController

  skip_before_action :authorized, only: [:index, :create]

  def index
    render json: Like.all
  end

  def create
    like = Like.create(like_params)
    like.save
    render :json => like, status: :accepted
  end

  private

  def like_params
    params.permit(:user_id)
  end
end
