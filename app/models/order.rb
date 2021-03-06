class Order < ApplicationRecord
  belongs_to :user
  belongs_to :product
  belongs_to :store


  validates :count, :store, presence: true

  # paginates_per 11
end
