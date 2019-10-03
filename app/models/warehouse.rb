class Warehouse < ApplicationRecord
  belongs_to :user, optional: true
  
  has_many :products_warehouses, dependent: :destroy
  has_many :products, through: :products_warehouses, dependent: :destroy

  # validates :title, :address, presence: true, uniqueness: true #, on: create
end
