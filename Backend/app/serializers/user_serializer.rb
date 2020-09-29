class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :likedRestaurants

  def likedRestaurants
    object.findlikedRestaurants
  end
end
