class User < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :likes
  has_many :restaurants, through: :likes
end
