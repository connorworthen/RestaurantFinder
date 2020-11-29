class UserSerializer < ActiveModel::Serializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email

  # def likedRestaurants
  #   object.findlikedRestaurants
  # end
end
