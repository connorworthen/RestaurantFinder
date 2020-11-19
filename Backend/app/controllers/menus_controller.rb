require 'pry'
class MenusController < ApplicationController

  def index
    render json: Menu.all
  end

  def create
    menu = Menu.create(menu_params)
    mneu.save
    render :json => menu, status: :accepted
  end

  private

  def menu_params
    params.require(:menu).permit(:appetizers, :entrees, :desserts, :drinks, :description)
  end
  
end