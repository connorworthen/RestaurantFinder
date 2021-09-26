class SessionsController < ApplicationController

  before_action :authorized, only: [:auto_login]

  def login
    user = User.find_by(username: params[:user][:username] || email: params[:user][:email])
    if user && user.authenticate(params[:user][:password])
      token = encode_token({user_id: user.id})
      render json: { user: user, jwt: token }, status: :accepted
    else
      render json: {failure: "Username or password invalid. Please try again."}
    end
  end

  def auto_login
    if session_user
      render json: session_user
    else
      render json: { error: "No User Logged In."}
    end
  end

end