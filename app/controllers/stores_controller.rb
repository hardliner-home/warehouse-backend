class StoresController < ApplicationController
  before_action :authenticate_user!

  def index

  end

  def show
    @title='Stores'
    @stores = Store.all
  end

  def new

  end

  def create
    @product = Pruduct.new(product_params)
  end

  def delete

  end

  private
  def product_params
    params.require(:products).permit(:title, :address, :number)
  end
end
