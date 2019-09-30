class Warehouse < ApplicationRecord
  belongs_to :user
  # has_and_belongs_to_many :products
  has_many :products_warehouses, dependent: :destroy
  has_many :products, through: :products_warehouses, dependent: :destroy
end
