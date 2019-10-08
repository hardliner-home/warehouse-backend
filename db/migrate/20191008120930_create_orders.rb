class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.references :store, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true
      t.integer :count, default: 0

      t.timestamps
    end
  end
end
