class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def show

  end

  def new
    @order = Order.new
    @warehouses = current_user.warehouses.all
  end

  def create
    @order = Order.new(order_params)

    if @order.save
      redirect_to new_order_path, method: :get
    else
      render 'new'
    end
  end

  private

  def order_params
    params.require(@order).permit(:count, :warehouse, :product)
  end

end
