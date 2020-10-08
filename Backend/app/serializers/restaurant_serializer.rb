class RestaurantSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :name, :address, :category, :closing_time, :opening_time, :price_range
end
