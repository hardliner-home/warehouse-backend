class Store < ApplicationRecord
  belongs_to :user

  has_many :orders, dependent: :destroy
  has_many :products, through: :orders, dependent: :destroy

  paginates_per 13
end
