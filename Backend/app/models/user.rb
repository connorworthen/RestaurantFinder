class User < ApplicationRecord
  has_secure_password
  has_many :favorites
  accepts_nested_attributes_for :favorites, :reject_if => :reject_favorites
  has_many :restaurants, :through => :favorites

  def reject_favorites(attributed)
    attributed['favorited'].blank?
  end
end
