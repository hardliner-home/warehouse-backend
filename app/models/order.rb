class Order < ApplicationRecord
  belongs_to :user
  belongs_to :product

  validates :count, :warehouse, :store, presence: true
end
