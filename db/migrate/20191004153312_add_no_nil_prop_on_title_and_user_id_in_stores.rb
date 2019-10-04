class AddNoNilPropOnTitleAndUserIdInStores < ActiveRecord::Migration[6.0]
  def change
    change_column_null :stores, :title, false
    change_column_null :stores, :user_id, false
  end
end
