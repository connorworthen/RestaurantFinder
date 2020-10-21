class Restaurant < ApplicationRecord
  mount_uploader :image, ImageUploader
  has_many :users, through: :likes
  has_many :likes
end
