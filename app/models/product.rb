class Product < ApplicationRecord
  has_many :products_warehouses, dependent: :destroy
  has_many :warehouses, through: :products_warehouses, dependent: :destroy

  has_many :orders, dependent: :destroy
  has_many :stores, through: :orders, dependent: :destroy

  # paginates_per 11
end
