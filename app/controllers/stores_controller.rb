class StoresController < ApplicationController

  before_action :authenticate_user!

  def index
    @title = 'Stores'
    @stores = Store.page(params[:page])
  end

  def create
    @store = Store.new(store_params)
    @store.user = current_user
  end

  private

  def store_params
    params.require(:product).permit(:title, :address, :number)
  end

end
