class SessionsController < ApplicationController
  
def create
    @user = User.find_by(email: params[:user][:email])
      if @user && @user.authenticate(params[:user][:password])
        session[:user_id] = @user.id
        render json: { user: UserSerializer.new(@user)}, status: :accepted
      else
        render json: {error: "Login error: email and password do not match records.", status: :unauthorized }
    end
  end

private

def sessions_params
  params.require(:user).permit(:email, :password)
end

end