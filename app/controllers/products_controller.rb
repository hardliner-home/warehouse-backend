class ProductsController < ApplicationController

  def index

    @warehouseProducts = Warehouse.find(params[:warehouse_id]).products.first

    respond_to do |format|
      format.html { text }
      format.json { render :text => @warehouseProducts }

      puts '!@#!@#!@#!@#!@#!@#!@#', @warehouseProducts
    end
  end

  def show
    @warehouseProducts = Product.find(params[:id])
  end
end