class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password

  # def likedRestaurants
  #   object.findlikedRestaurants
  # end
end
