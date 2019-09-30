class AddCountColumnToProducts < ActiveRecord::Migration[6.0]
  def change
    add_column :products, :count, :integer, default: 0
  end
end
