@title = 'Warehouses'

class WarehousesController < ApplicationController
  before_action :authenticate_user!

  def index
    # @warehouses = Warehouse.all
    @warehouses = current_user.warehouses.all
  end

  def show
    @warehouse = Warehouse.find(params[:id])
    @warehouseProducts = @warehouse.products
                             .order(:id)
                             .page(params[:page])
  end

  def new
    @warehouse = Warehouse.new
  end

  def edit
    @warehouse = Warehouse.find(params[:id])
  end

  def create
    @warehouse = Warehouse.new(warehouse_params)
    @warehouse.user = current_user

    if @warehouse.save
      redirect_to warehouses_path, method: :get
    else
      render 'new'
    end

  end

  def update
    if @warehouse.update(warehouse_params)
      redirect_to @warehouse
    else
      render 'edit'
    end
  end

  def destroy
    @warehouse = Warehouse.find(params[:id])
    if @warehouse.destroy
      redirect_to warehouses_path, method: :get
    end
  end

  private

    def warehouse_params
      params.require(:warehouse).permit(:title, :number, :address)
    end

end
