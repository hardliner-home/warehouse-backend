class AddNoNilAttrToTitleColumnInWarehouses < ActiveRecord::Migration[6.0]
  def change
    change_column_null :warehouses, :title, false
    change_column_null :warehouses, :address, false
  end
end
