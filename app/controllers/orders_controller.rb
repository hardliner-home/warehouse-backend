class OrdersController < ApplicationController


  def index
    @orders = Order.all
  end

  def show

  end

  def new
    @order = Order.new

    @store_warehouses = Store.find(params[:store_id]).warehouses.order('id ASC').ids
    @store_id = params[:store_id]

    # @warehouse_products = Warehouse.find(params[:store_id]).products
    # @warehouse_products = []

    respond_to do |format|
      @warehouse_products = Warehouse.find(params[:store_id]).products
      puts '>>>>>'
      puts @warehouse_products.inspect

      format.html {}
      format.json {

        render json: @warehouse_products
      }
    end

  end



  def create
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
