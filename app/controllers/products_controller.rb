class ProductsController < ApplicationController

  def index

    @warehouseProducts = Warehouse.find(params[:warehouse_id]).products.first

    respond_to do |format|
      format.html
      format.json { render json: @warehouseProducts }
    end
  end

  def show
    @warehouseProducts = Product.find(params[:id])
  end
end