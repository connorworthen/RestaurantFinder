class User < ApplicationRecord
  has_secure_password
  # validates :username, uniqueness: true
  # has_many :restaurants
  # has_many :likes
end
