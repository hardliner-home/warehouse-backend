class AddCountColumnIntoWhprodTable < ActiveRecord::Migration[6.0]
  def change
    add_column :products_warehouses, :count, :integer
  end
end
