class StoresController < ApplicationController
  before_action :authenticate_user!

  def index
    @title='Stores'
    @stores = Store.all
  end

  def create
    @product = Pruduct.new(product_params)
  end

  private
  def product_params
    params.require(:product).permit(:title, :address, :number)
  end
end
