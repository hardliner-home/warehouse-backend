class StoreWarehouse < ApplicationRecord
  belongs_to :store
  belongs_to :warehouse
end
