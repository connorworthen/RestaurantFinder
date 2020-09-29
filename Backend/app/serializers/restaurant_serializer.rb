class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :closing_time, :opening_time, :price_range
end
