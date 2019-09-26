class CreateWarehouses < ActiveRecord::Migration[6.0]
  def change
    create_table :warehouses do |t|
      t.string :title, :address
      t.integer :number
      t.belongs_to :user

      t.timestamps
    end
  end
end
