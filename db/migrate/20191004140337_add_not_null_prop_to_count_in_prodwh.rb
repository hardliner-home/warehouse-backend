class AddNotNullPropToCountInProdwh < ActiveRecord::Migration[6.0]
  def change
    change_column_null :products_warehouses, :count, false
    change_column_default :products_warehouses, :count, 0
  end
end
