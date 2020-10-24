class RestaurantSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer

  attributes :id, :name, :address, :category, :closing_time, :opening_time, :price_range, :image

  def images
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
