require 'pry'
class MenusController < ApplicationController

  def index
    render json: Menus.all
  end

  def create
    menu = Menu.create(menu_params)
    mneu.save
    render :json => menu, status: :accepted
  end

  private

  def menu_params
    params.permit(:appetizer, :entree, :dessert, :drink)
  end
  
end