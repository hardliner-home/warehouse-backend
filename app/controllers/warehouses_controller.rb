class WarehousesController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def show
    @title='Warehouses'
    @warehouses= Warehouse.all
  end

  def new

  end

  def create
    @warehouse = Warehouse.new(warehouse_params)

    @warehouse.save
    redirect_to @warehouse
  end

  def delete

  end

  private
    def warehouse_params
      params.require(:warehouse).permit(:title, :address, :number)
    end
end
