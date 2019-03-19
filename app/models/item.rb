class Item < ApplicationRecord
  belongs_to :store, dependent: :destroy
end
