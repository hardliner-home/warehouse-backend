class AddCountColumnIntoProductsWarehousesTable < ActiveRecord::Migration[6.0]
  def change
    change_column_null :products_warehouses, :count, false
  end
end
