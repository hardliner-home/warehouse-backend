class WarehousesController < ApplicationController
  # before_action :authenticate_user!

  def index
    @title='Warehouses'
    @warehouses = Warehouse.all
  end

  def show
    @warehouse = Warehouse.find(params[:id])
    @title = 'Warehouse'
  end

  def new

  end

  def create
    # @warehouse = Warehouse.new(warehouse_params)
    # @warehouse.save
    # redirect_to @warehouse
  end

  def destroy

  end

  # private
  #   def warehouse_params
  #     params.require(:warehouse).permit(:title, :address, :number)
  #   end
end
