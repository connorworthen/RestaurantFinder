class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :category, :closing_time, :opening_time, :price_range
end
