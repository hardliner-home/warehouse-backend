class AddUserOwnerType < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :owner_type, :string
  end
end
