class AddTitleColumnToStores < ActiveRecord::Migration[6.0]
  def change
    add_column :stores, :title, :string
  end
end
