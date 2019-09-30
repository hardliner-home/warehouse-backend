class ProductsController < ApplicationController

  def index
    if params[:warehouse_id].present?
      if Warehouse.find(params[:warehouse_id]).valid?
        @warehouseProducts = Warehouse.find(params[:warehouse_id]).products
      end
    end
  end

  # def show
  #   @warehouseProducts = Product.find(params[:id])
  # end
end
