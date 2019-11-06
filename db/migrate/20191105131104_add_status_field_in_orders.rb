class AddStatusFieldInOrders < ActiveRecord::Migration[6.0]
  def change
    add_column :orders, :status, :boolean,  nil: false, default: 'false', dependent: :destroy
  end
end
