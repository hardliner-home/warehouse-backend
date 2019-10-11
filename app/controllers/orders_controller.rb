class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def show

  end

  def new
    @order = Order.new
    @storeWarehouses = Store.find(params[:store_id]).warehouses.order('id ASC').ids #

    # @products = Store.find_by(params[:store_id]).products
    # @warehouses = current_user.warehouses.all
    # @products =
  end

  def create
    # @order = Order.new(order_params)
    #
    # if @order.save
    #   redirect_to new_order_path, method: :get
    # else
    #   render 'new'
    # end
  end

  private

  def order_params
    params.require(@order).permit(:count, :store, :product)
  end

end
