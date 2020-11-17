class RestaurantSerializer < ActiveModel::Serializer
  # extend ActiveModel::Naming
  # include ActiveModel::Conversion
  # def persisted?
  #   false
  # end
  # include FastJsonapi::ObjectSerializer
  include Rails.application.routes.url_helpers
  
  attributes :id, :name, :address, :category, :closing_time, :opening_time, :price_range, :image
  
  # def image
  #   rails_blob_path(object.image, only_path: true) if object.image.attached?
  # end

  def image
    return unless object.image.attached?
    
    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def image_url
    url_for(object.image)
  end

end

