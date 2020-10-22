class Restaurant < ApplicationRecord
  has_one_attached :image
  has_many :users, through: :likes
  has_many :likes
end
