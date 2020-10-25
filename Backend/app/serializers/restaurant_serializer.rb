class RestaurantSerializer < ActiveModel::Serializer
  # include FastJsonapi::ObjectSerializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :address, :category, :closing_time, :opening_time, :price_range, :image_url

  def image_url
    if object.image.attached?
      return polymorphic_url(object.image, host: ‘127.0.0.1:3000’)
    end
  end
end

# @restaurant.image.service.send(:object_for, @restaurant.image.key).public_url
# Rails.application.routes.url_helpers.rails_blob_url(@restaurant, only_path: true)