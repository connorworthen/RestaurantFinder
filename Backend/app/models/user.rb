class User < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  has_many :likes
  has_many :restaurants, through: :likes

   def findLikedRestaurants
    id_array = Like.all.select{|like| like.user_id == self.id}.map{|like| like.restaurant_id}
    id_array.map do |arr_id|
      Restaurant.all.find{|restaurant|restaurant.id ==arr_id}
    end
  end

end
