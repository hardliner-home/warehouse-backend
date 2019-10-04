class ProductsController < ApplicationController

  def index
    if params[:warehouse_id].present?
      @warehouseProducts = Warehouse.find(params[:warehouse_id]).products(params[:page])
    else
      @warehouseProducts = nil
    end
  end

  def show
    @warehouseProducts = Product.find(params[:id])
  end
end