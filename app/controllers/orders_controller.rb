class OrdersController < ApplicationController
  def index
    @orders = Order.all
  end

  def show

  end

  def new
    @order = Order.new
    @store_warehouses = Store.find(params[:store_id]).warehouses.order('id ASC').ids
    @warehouse_products = Warehouse.find(params[:store_id]).products

  end

  def create

    puts '11231231312312312312312312312312312312312'
    @order = Order.new(order_params)

    if @order.save
      redirect_to store_orders_path, method: :post
    else
      render 'new'
    end
  end

  private

  def order_params
    params.require(@order).permit(:count, :warehouse, :product)
  end

end
