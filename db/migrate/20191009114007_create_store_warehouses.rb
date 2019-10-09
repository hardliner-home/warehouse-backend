class CreateStoreWarehouses < ActiveRecord::Migration[6.0]
  def change
    create_table :store_warehouses do |t|
      t.references :warehouse, null: false, foreign_key: true
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
