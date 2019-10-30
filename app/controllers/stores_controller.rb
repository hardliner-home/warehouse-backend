class StoresController < ApplicationController
  before_action :authenticate_user!

  def index
    @title = 'Stores'
    # @stores = Store.page(params[:page])
    @stores = Store.where(user_id: current_user.id).page(params[:page])
  end

  # def create
  #   @store = Store.new(store_params)
  #   @store.user = current_user
  # end

  def show
    @store = Store.find(params[:id])
    @storeProducts = @store.products
                            .order(:id)
                            .page(params[:page])
  end

  private

  def store_params
    params.require(:product).permit(:title, :address, :number)
  end

end
