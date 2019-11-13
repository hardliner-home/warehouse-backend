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

    if Store.exists?(params[:store_id])

      @store_warehouses = Store.find(params[:store_id]).warehouses.order('id ASC').ids
      @store_id = params[:store_id]

      @warehouse_products = Warehouse.find(params[:store_id]).products

      respond_to do |format|
        format.html {}
        format.json { render json: @warehouse_products }
      end

    else
      redirect_to '/page-not-found'
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
    puts '21312312', params
    @order = Order.find(params[:id])
    @order.update(status: params[:status])

    if @order.save
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
