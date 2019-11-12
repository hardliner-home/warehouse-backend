class OrdersController < ApplicationController

  def index
    # @orders = Order.all
    @orders = Order.joins(:product)
    # @store_id = params[:store_id]
    # puts @orders
  end

  def show
    @order = Order.find(params[:id])
    @product = Product.find(@order.product_id)
  end

  def new
    @order = Order.new

    @store_warehouses = Store.find(params[:store_id]).warehouses.order('id ASC').ids
    @store_id = params[:store_id]

    respond_to do |format|
      @warehouse_products = Warehouse.find(params[:store_id]).products

      format.html {}
      format.json { render json: @warehouse_products }
    end

  end

  def create
    @order = Order.new(order_params)

    @order.user = current_user
    if @order.save!
      redirect_to store_orders_path, method: :get
    else
      respond_to do |format|
        format.html {}
        format.json { render @order.errors }
      end
    end
  end

  def update
    @order = Order.find(params[:id])

    if @order.('status': params[:status])
      redirect_to orders_path, method: :get
    else
      respond_to do |format|
        format.html {}
        format.json { render :text => "ERROR, KOVAL'SKI" }
      end
    end

  end

  private

  def order_params
     params.fetch(:order, {}).permit( :count, :product_id, :store_id )
  end

  # def update_params
  # end

end
