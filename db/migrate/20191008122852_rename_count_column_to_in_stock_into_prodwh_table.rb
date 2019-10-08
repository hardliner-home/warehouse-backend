class RenameCountColumnToInStockIntoProdwhTable < ActiveRecord::Migration[6.0]
  def change
    rename_column :products_warehouses, :count, :in_stock
  end
end
