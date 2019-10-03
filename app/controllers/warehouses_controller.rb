class WarehousesController < ApplicationController
  before_action :authenticate_user!

  @title = 'Warehouses'

  def index
    @warehouses = Warehouse.all
  end

  def show
    @warehouse = Warehouse.find(params[:id])
  end

  def new
    @warehouse = Warehouse.new
  end

  def create
    @warehouse = Warehouse.new(warehouse_params)

    if @warehouse.save
      redirect_to warehouses_path, method: :get
    else
      render 'new'
    end

  end

  def update

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
