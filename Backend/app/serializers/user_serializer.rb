class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username

  # def likedRestaurants
  #   object.findlikedRestaurants
  # end
end
