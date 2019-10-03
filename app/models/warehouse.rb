class Warehouse < ApplicationRecord
  belongs_to :user, optional: true
  
  has_many :products_warehouses, dependent: :destroy
  has_many :products, through: :products_warehouses, dependent: :destroy
end
